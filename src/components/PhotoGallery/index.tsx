import Gallery from "react-photo-gallery";
import "./PhotoGallery.css";
import { PhotoGalleryProps } from "./types";
import styled from "styled-components";
const GalleryContainer = styled.div`
  max-width: 1400px;
  margin: 100px auto 0;
  padding: 0 24px;

  h1 {
    font-size: 32px;
    color: #333;
    margin-bottom: 40px;
    font-weight: 600;
  }
`;
const StyledImage = styled.img`
  border-radius: 16px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  padding: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const photos = [
  {
    src: "https://s3-alpha-sig.figma.com/img/26bd/ad2f/b1d6855e8c30a687766fd3437ff5760a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XhxYj6WPbOl3mel7NDrFJa03i-G0FXGQxdU9pwfatZtI~N1mbLX8f5U0XXrb4RrpkR-Zx4sMNl~jJEKR10RlaVlrbuxA1w-f9PQVtgssbZhNWMTYrLJdltY9ICjyzLdbvUasHfwLDndYX2ELZ6V-ITnFolKSkNgsUFMjYN3z4td3MlU0iMT-m~cJ2Qqfp76LJasUctNVRhimjjUPAE1Vz1i-dkzZTsKTXSG7vN~CX08YLP~Ujlh~oktVSE5RYTTeKpMMHLbzYVxzMfN741Bf2YNpLrfiGHdkmZceOvhGEYIy8YJlEdXAX6KF-iukt42C6fNyMim9tTAj8t6PTPMjIw__",
    width: 5,
    height: 2,
    name: "New York",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/c340/3863/c03a18e161d0be50b6de99a5516af0a9?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gp0iM6hyWVuRuXM~ufzWfZAbpl4take-KV3qp-qFSwxXRjblyzCLhW59vcY7cn5XZcooxnq81ovJXPvP5vUPycp084ErjU3xm2ujr~qmfj9cqa-spjg8mJlvdHb2oX07AFT1eeQMHvG7QCr~9n7vlBmAJ6VMIMKBjqtDCt8VamjbKrL0yNPXRugjFvxBO3w--zPtc5V~eVyclfL7MgFRPBZcBpmt4LkZhiketZsfz99s71iWWVMl1O6ZIqLtf5nr-KsEE4690eh~cKW4hpItYsE~Z0gthUO1FmBI81WG79w7vGuCkGEF9CDiBMQ6wrIiDo~CPRBVXlHBKbt5KvFWlw__",
    width: 1,
    height: 1,
    name: "Los Angeles",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/8adc/d484/d0266fc7bd4241b13cdadac71357e87a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WhGljKirXMsIgw~TGnYMQi~iD2ZaSxoAF7y~q5Ag7FnNBtYLgsEVAcfQOOv9sJQeq1gFs9LXOWtNoaKiGKgArBGxvOm9kir3jyHW~ZvmMITIavLi~TPB-Tb89DJoOOLrVLs3ZC5CwPH3UxQ0NzHcPy~Q~LKPz3rK45mstNOvMktw6ewuMvfr2Dj4lJA-3xaimHG1wOGuwf1cKA18F9vqFXKebbJmI9AFbtyjcqCYpxbg1J6tpmb~qP0SPMs6rfGuL92P5le6ca3cstAY7N4sdul8a8zMcbZ90vdKcOQ5RLHaddy-5oIXivW~DnM~EDjK14UukaMj33GxHc5X4NIzzQ__",
    width: 1,
    height: 1,
    name: "Hong Kong",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/4c1c/f8fa/4a98f0863dc311d1dda322ff95d034c4?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRhSjFS8DpHjCduLHjT-iekOgFZPcu97JscSTbxmo8Zo1w1r58VY1eBEa3O6Kz8UeqBpBlNCp0cVkmU6h4Ag9PdSO8VM~eJQ-gu0sLWJotU5tcTrgzmrrb4jC8G3N3G9NSjxEG7D1DoGorlT0xwbnjX7U80Px0zB2UQsod3RJBJgnD1NS3O~IKYmQe8SPF~Cm1N4Z0jOVfZvBC7X4RcFm~RhWVCfAG0utIxJbMcdN0xV7eX4nHzzwPcZw1u13f7~TRRnLbIfVMhCL0cHDuyewbnrzwE3We1B3az7mRQvrwdJlucRFRiy82UA5pzpLjQjLmvQaM9anvifPDi4GiRTkw__",
    width: 1,
    height: 1,
    name: "Miami",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/618a/1f53/14070a1d9936530880ac1c7adda0ee2e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MRUpcxGrzL5YtFCH1zxVtGSNyR9T6NcgHhUQaGJAm4bIzC2e2De9GTqriQM40pgZ7AO-st1NDnynNmTvCRuKkjhKQRDm6GxxFHR7ia9DJcvXeWFiqPhT9hom-rCSa05ORqNGkSCuOr9XBEvNBVh8IFzF1nnyNTs1~C1aBM4NnJ5LVtIkSf53uH-QzB2jThQVG3bCrZcU4727hiOJBcT3mwS55-Rr-rRMv79hIe5gbbK7bLVhIlA7UQG2h83zx9Ia0ddPT0WNysOok5mr23BxqowxZiarp2HJCMzjz8QAOwJLxiBrCnzp8~rbsaZxpriaO5EjBxX3HF5oTPsqK6U2-w__",
    width: 1,
    height: 1,
    name: "Cape Town",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/57b1/a846/3a4dc20dd9fd7bce8f675468a31950c5?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cOszgNpgbJI71p5BVsefolh7n8iO8EOK~n9xkHgY-Azkpur9xpmBKknlFhj-5hpfeQK5cJ-346NESt3DwVQAzhOhJwEOME7MYObI36dZ3TMhF10Gi6TOCdlqTDkOyVIcLUm9DRrNF9Dx6p6Q59WII0iYG4Op8r6fsAVCTMLLlU9HkZH7rs~zhyBB5jYdyW6J9b~4teSXHK6mWCTXwYiC2t37xvMMBkloiANo4cT~Wf4qvBh3cwTulJ~L4eq~3g93EgDsyCnIdXiesNc6Hc9Zv7pS4yKDmyLC2z-Yt0oMoMKcgrCiqZvoMKjop1mZO5fKcivjG53vgxPdFpYIfFKlCQ__",
    width: 5,
    height: 5,
    name: "Dubai",
  },
  // {
  //   src: "../../assets/image_7.webp",
  //   width: 3,
  //   height: 4,
  // },
  {
    src: "https://s3-alpha-sig.figma.com/img/9f51/9899/1b03ca2186a59072dbd3ae5acfe81609?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TO2ayK4llV~CDzWKavmgfBNhylm-axXKRZbJms09FFe57UPdnU2WR8u52wf2E271-vba9y8O8Wef2kgO9I92ERct0Dc-LPA-JUcWWxm77iKxzV64mZEBgyhDR1dy8o5J7J21JZLLpgDx~nl1V0mqjeUgxAxl8iC-aWOecx2q987f5KsTLjQvgRi9TD7rcuWSfh65U-1TR1f8RNaVR~NNSUbfvhHD6L-1OYqL0wOENRPl11W1PhSOaC9FMXxPbIQ9BV3tdSIrGx8vgl0TTP5x8vTGz9BeOkuq~Kh8eQzhnM~BIYSwnd~oXunPkEY36ckqrcgT7DJQSFtLINTt8U8RUA__",
    width: 1,
    height: 1,
    name: "Phuket",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/368a/930f/4b2754003c5e2da73123fb29ee7dfa95?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cl0KEAl5iPomQYxH7ROhT~Dnvm4s31nnvoQynE5GnbMElDaUqYci44rVr0AuFSO9h5woVtEQiYKM66LHsQlHG69YgARWPgUWPov-yzENAvPw8Mvc5kLxZoPGy7BOmyIa928gBlujIJqWy95K-jvlMoEh86aYNfza1BH0YdpZDbkjBulH6vA4iKROG07Pum5BeqjKYgit7tTn9YfkKksyTdwoT9QN0NkYO3EacASMBkdu5AtgMoUfUqAEx79m3UbJEHwxIr8VDeqZj9IKOr1h0LZ9pSqqWfQDatyvg-ClR4obGy18LESa51v-d3724ErkVF93QDjxleUWmYA~WHhrbw__",
    width: 1,
    height: 1,
    name: "Maldives",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/368a/930f/4b2754003c5e2da73123fb29ee7dfa95?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cl0KEAl5iPomQYxH7ROhT~Dnvm4s31nnvoQynE5GnbMElDaUqYci44rVr0AuFSO9h5woVtEQiYKM66LHsQlHG69YgARWPgUWPov-yzENAvPw8Mvc5kLxZoPGy7BOmyIa928gBlujIJqWy95K-jvlMoEh86aYNfza1BH0YdpZDbkjBulH6vA4iKROG07Pum5BeqjKYgit7tTn9YfkKksyTdwoT9QN0NkYO3EacASMBkdu5AtgMoUfUqAEx79m3UbJEHwxIr8VDeqZj9IKOr1h0LZ9pSqqWfQDatyvg-ClR4obGy18LESa51v-d3724ErkVF93QDjxleUWmYA~WHhrbw__",
    width: 1,
    height: 1,
    name: "Sydney",
  },
];

// Custom renderImage function to apply class
function renderImage({ index, photo }: any) {
  return (
    <StyledImage
      src={photo.src}
      alt={`Destination ${index + 1}`}
      style={{
        width: photo.width,
        height: photo.height,
      }}
      loading="lazy"
    />
  );
}

function PhotoGallery({ direction }: PhotoGalleryProps) {
  return (
    <GalleryContainer>
      <h1>Trending Destinations</h1>
      <Gallery
        photos={photos}
        direction="row"
        renderImage={renderImage}
        margin={12}
        targetRowHeight={300}
      />
    </GalleryContainer>
  );
}
export default PhotoGallery;
