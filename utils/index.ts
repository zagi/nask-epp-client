export const generateClTRID = (prefix: string = "CLI"): string => {
    const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
    const randomPart = Math.floor(Math.random() * 100000).toString().padStart(5, "0");
    return `${prefix}-${timestamp}-${randomPart}`;
  }