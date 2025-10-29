const textEncoder = new TextEncoder();

const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
};

export interface EncryptedPayload {
  iv: string;
  cipherText: string;
}

export const encryptPayload = async (
  payload: unknown,
  secret: string
): Promise<EncryptedPayload> => {
  if (!secret) {
    throw new Error("Missing encryption secret");
  }

  if (typeof window === "undefined" || !window.crypto?.subtle) {
    throw new Error("Encryption is not supported in this environment");
  }

  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const keyMaterial = await window.crypto.subtle.digest(
    "SHA-256",
    textEncoder.encode(secret)
  );

  const key = await window.crypto.subtle.importKey(
    "raw",
    keyMaterial,
    { name: "AES-GCM" },
    false,
    ["encrypt"]
  );

  const dataBuffer = textEncoder.encode(JSON.stringify(payload));
  const encryptedBuffer = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    dataBuffer
  );

  return {
    iv: arrayBufferToBase64(iv.buffer),
    cipherText: arrayBufferToBase64(encryptedBuffer),
  };
};
