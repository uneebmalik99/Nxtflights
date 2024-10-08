import { lazy } from "react";
import styles from "../Faqs/Faqs.module.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Faqs = () => {
  return (
    <>
      <ScrollToTop />
      <div className={styles.faqsBg}></div>
      <div className={styles.faqsHeadingDiv}>
        <h1 className={styles.faqsHeading}>Frequently Asked Questions</h1>
      </div>
      <img
        src="../../assets/faqs_plane_bg.png"
        alt=""
        id={styles.faqs_plane_bg}
      />
      <div className={styles.faqsContainer}>
        <Accordion className={styles.MuiPaper} defaultExpanded>
          <AccordionSummary
            className={styles.MuiButtonBase}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.MuiPaper}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Faqs;
