import { imageSize } from "image-size";

export const IMAGE_REQUIREMENTS = {
  OFFER: { width: 310, height: 388, label: "310 × 388 px" },
  SQUARE: { width: 262, height: 262, label: "262 × 262 px" },
  LANDSCAPE: { width: 413, height: 235, label: "413 × 235 px" },
};

export function validateImageDimensions(buffer, requirement) {
  let dimensions;

  try {
    dimensions = imageSize(buffer);
  } catch {
    return { valid: false, error: "Could not read the image file. Please upload a valid image." };
  }

  if (dimensions.width !== requirement.width || dimensions.height !== requirement.height) {
    return {
      valid: false,
      error: `Image must be exactly ${requirement.label}. Uploaded image is ${dimensions.width} × ${dimensions.height} px.`,
    };
  }

  return { valid: true };
}
