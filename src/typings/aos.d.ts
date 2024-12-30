declare module 'aos' {
    const AOS: {
      init: (options?: { once?: boolean; duration?: number }) => void;
    };
    export default AOS;
  }
  