const image = {
  name: "Hedy Lamarr",
  class: "avatar",
  alt: "Photo of Hedy Lamarr",
  style: { width: "90px", height: "90px" },
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hedy_Lamarr_Publicity_Photo_for_The_Heavenly_Body_1944.jpg/640px-Hedy_Lamarr_Publicity_Photo_for_The_Heavenly_Body_1944.jpg",
};

function GenerateAvatar() {
  return (
    <img
      src={image.src}
      alt={image.alt}
      style={image.style}
      className={image.class}
    />
  );
}

export default AvatarImage = () => {
  return (
    <>
      <h1> {image.name} </h1>
      <GenerateAvatar />
    </>
  );
};
