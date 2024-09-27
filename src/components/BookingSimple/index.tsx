import { Fade } from "react-awesome-reveal";
import BookingSimpleContent from "../../content/BookingSimple.json";
import { BookingSimpleSection, BookingSimpleSubTitle, BookingSimpleTitle } from "../BookingSimple/styles";
import { BookingSimpleProps } from "./types";

const BookingSimple = ({ direction }: BookingSimpleProps) => {
  return (
    <Fade direction={direction} triggerOnce>
      <BookingSimpleSection>
        <BookingSimpleTitle>{BookingSimpleContent.title}</BookingSimpleTitle>
        <p>
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus.
          <br />
          <br />
          Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque
          ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
          tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis
          diam sit amet lacinia. Aliquam in elementum tellu
        </p>
        <BookingSimpleSubTitle>{BookingSimpleContent.title}</BookingSimpleSubTitle>
        <p>
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus.
          <br />
          <br />
          Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque
          ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
          tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis
          diam sit amet lacinia. Aliquam in elementum tellu
        </p>
      </BookingSimpleSection>
    </Fade>
  );
};

export default BookingSimple;
