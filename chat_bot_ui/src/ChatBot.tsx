import Layout from "./container/Layout";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { DMSansGeneric } from "./components/Text";
import BoxLabeled from "./components/BoxLabeled";
import WaveIcon from "./assets/wave.svg";
import QuestionMark from "./assets/questionMark.svg";
import BotIcon from "./favicon.svg";
import { pxToRem } from "./utils/themeUtils";

import DotIcon from "./assets/dot.svg";
import ChatIcon from "./assets/chat.svg";
import { useStyles } from "./styles";
import { useEffect, useState } from "react";

const ChatBot = () => {
  const styles = useStyles();
  const [active, setActive] = useState(false);

  const trasitionDelay = (delay: number) => ({
    transition: "all 0.2s ease-in",
    opacity: 1,
    transitionDelay: String(delay) + "s",
  });


  const questionsMap = [
    {
      label: "Can I redeem my FB before the original term?",
      width: "95%",
      margin: `${pxToRem(11)} 0 ${pxToRem(10)} 0 `,
      style: trasitionDelay(0.8),
      startIcon: DotIcon,
    },
    {
      label: "How do I pay my Credit card bill?",
      width: "95%",
      margin: `0 0 ${pxToRem(10)} 0 `,
      style: trasitionDelay(1.2),
      startIcon: DotIcon,
    },
    {
      label: "How can I get my Account Statement?",
      width: "95%",
      margin: `0 0 ${pxToRem(10)} 0 `,
      style: trasitionDelay(1.6),
      startIcon: DotIcon,
    },
    {
      label: "What is the tenure of Fixed Deposit?",
      width: "95%",
      margin: `0 0 ${pxToRem(10)} 0 `,
      style: trasitionDelay(2),
      startIcon: DotIcon,
    },
    {
      fontWeight: 500,
      startIcon: ChatIcon,
      borderRadius: `${pxToRem(100)}`,
      justifyContent: "center",
      margin: `auto 0 ${pxToRem(5)}`,
      width: `${pxToRem(266)}`,
      boxShadow: `0px ${pxToRem(4)} ${pxToRem(5)} rgba(0, 0, 0, 0.1)`,
      label: "Start a New Conversation",
      style: trasitionDelay(2.4),
    },
  ];

  return (
    <Layout>
      <div
        style={{
          height: "100%",
          transition: "all 0.1s ease-out",
        }}
      >
        <div className={styles.banner} style={trasitionDelay(0.2)}>
          {/* <div className={styles.header}>
            <DMSansGeneric
              fontSize={30}
              lineHeight={39.09}
              fontWeight={700}
              color="#FFFFFF"
            >
              IRIS
            </DMSansGeneric>

            <IconButton
              style={{
                color: "#FFF",
              }}
              onClick={() => setActive(false)}
            >
              <ClearIcon />
            </IconButton>
          </div> */}
          <DMSansGeneric
            fontSize={30}
            lineHeight={39.09}
            fontWeight={700}
            color="#FFFFFF"
          >
            IRIS
          </DMSansGeneric>
          <DMSansGeneric
            fontSize={22}
            lineHeight={28.64}
            fontWeight={700}
            color="#FFFFFF"
          >
            Hello{" "}
            <img
              src={WaveIcon}
              alt="wave-icon"
              style={{ marginLeft: "1.2rem" }}
            />
          </DMSansGeneric>
          <DMSansGeneric
            fontSize={18}
            lineHeight={23}
            fontWeight={500}
            color="#FFFFFF"
          >
            I am Iris, a Virtual Assistant How may I help you?
          </DMSansGeneric>
        </div>
        <div className={styles.botIconContainer} style={trasitionDelay(0.2)}>
          <img
            src={BotIcon}
            alt="bot-icon"
            style={{ height: pxToRem(30), width: pxToRem(60) }}
          />
        </div>
        <div className={styles.contentBody} style={trasitionDelay(0.4)}>
          <div className={styles.contentContainer}>
            <div className={styles.contentTitle} style={trasitionDelay(0.6)}>
              <DMSansGeneric
                fontSize={14}
                lineHeight={18}
                fontWeight={500}
                position="relative"
              >
                Frequently Asked Questions
                <img
                  src={QuestionMark}
                  alt="question-mark-icon"
                  style={{
                    height: pxToRem(21),
                    width: pxToRem(21),
                    position: "absolute",
                    marginLeft: `${pxToRem(10)}`,
                    top: `${pxToRem(-2)}`,
                  }}
                />
              </DMSansGeneric>
            </div>
            <div className={styles.content}>
              {questionsMap.map((el, idx) => (
                <BoxLabeled
                  width={el.width}
                  startIcon={el.startIcon}
                  margin={el.margin}
                  label={el.label}
                  style={el.style}
                  fontWeight={el.fontWeight as any}
                  borderRadius={el.borderRadius}
                  boxShadow={el.boxShadow}
                  justifyContent={el.justifyContent}
                  key={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatBot;
