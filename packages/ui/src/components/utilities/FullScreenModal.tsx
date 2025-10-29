"use client";
import { ReactNode, useEffect, useRef } from "react";
import { IconType } from "react-icons";
import Button from "../buttons/Button";

interface Props {
  showModal: boolean;
  toggle: () => void;
  children: ReactNode;
  icon: IconType;
}

const FullScreenModal = ({
  children,
  icon: Icon,
  showModal,
  toggle,
}: Props) => {
  // 🔑 Ref to trap focus inside the modal
  const modalRef = useRef<HTMLDivElement>(null);

  // 🚀 Focus modal when it opens
  useEffect(() => {
    if (showModal && modalRef.current) {
      const firstFocusable = modalRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }
  }, [showModal]);

  // 🪤 Trap focus within the modal when it's open
  useEffect(() => {
    const handleTab = (e: KeyboardEvent) => {
      if (!showModal || !modalRef.current) return;

      const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift+Tab
          if (document.activeElement === first) {
            last?.focus();
            e.preventDefault();
          }
        } else {
          // Tab
          if (document.activeElement === last) {
            first?.focus();
            e.preventDefault();
          }
        }
      }

      // Escape closes the modal
      if (e.key === "Escape") {
        toggle();
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [showModal, toggle]);

  return (
    <>
      <button
        className="p-3 text-[48px] cursor-pointer"
        onClick={toggle}
        aria-haspopup="dialog"
        aria-expanded={showModal}
        aria-controls="mobile-menu-modal"
      >
        <Icon aria-hidden="true" />
        <span className="sr-only">Open menu</span>
      </button>

      {showModal && (
        <div
          id="mobile-menu-modal"
          ref={modalRef}
          role="dialog" // ✅ dialog semantics
          aria-modal="true" // ✅ marks it as a modal
          aria-labelledby="modal-title" // ✅ label for screen readers
          className="bg-[rgba(255,255,255,.8)] fixed inset-0 z-[99] flex justify-center items-start pt-30 text-3xl"
          style={{ backdropFilter: "blur(15px)" }}
        >
          <div className="w-full max-w-md px-4 font-bold">
            <h2 id="modal-title" className="sr-only">
              Mobile Navigation Menu
            </h2>

            {children}

            <div className="absolute left-1/2 bottom-20 -translate-x-1/2">
              <Button
                button={{
                  action: toggle,
                  color: "gray",
                  style: "secondary",
                  text: "Close Menu",
                  type: "button",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenModal;
