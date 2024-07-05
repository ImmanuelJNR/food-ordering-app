// src/utils/loadImages.ts
const importAll = (requireContext: ReturnType<typeof require.context>) => {
    let images: { [key: string]: string } = {};
    requireContext.keys().forEach((item) => {
      images[item.replace('./', '')] = requireContext(item);
    });
    return images;
  };
  
  const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));
  
export default images;
  