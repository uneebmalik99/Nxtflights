import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-Thin.ttf") format("truetype");
        font-weight: 100; /* Thin */
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-ExtraLight.ttf") format("truetype");
        font-weight: 200; /* Extra Light */
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-Light.ttf") format("truetype");
        font-weight: 300; /* Light */
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-Regular.ttf") format("truetype");
        font-weight: 400; /* Regular */
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-Medium.ttf") format("truetype");
        font-weight: 500; /* Medium */
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-SemiBold.ttf") format("truetype");
        font-weight: 600; /* Semi Bold */
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-Bold.ttf") format("truetype");
        font-weight: 700; /* Bold */
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-ExtraBold.ttf") format("truetype");
        font-weight: 800; /* Extra Bold */
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-Black.ttf") format("truetype");
        font-weight: 900; /* Black */
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: "Montserrat";
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Montserrat";
        color: #18216d;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #18216d;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
