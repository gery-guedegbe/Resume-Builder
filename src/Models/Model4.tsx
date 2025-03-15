import React from "react";
import { IoMdCall } from "react-icons/io";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { FaEnvelope } from "react-icons/fa6";
import { IoEarthSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const Model4 = () => {
  const styles = StyleSheet.create({
    page: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      backgroundColor: "white",
      padding: "28px",
      // fontFamily: "Lexend, sans-serif",
    },
    header: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: "16px",
      borderBottom: "1.5px #888780 solid",
    },
    headerLeftComponent: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    name: {
      color: "#110f01",
      textAlign: "left",
      fontSize: "30px",
      fontWeight: "bold",
      lineHeight: "36px",
      textTransform: "uppercase",
    },
    jobTitle: {
      color: "#888780",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "16px",
      textTransform: "uppercase",
    },
    links: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "1px",
      color: "#110f01",
      fontSize: "15px",
      fontWeight: "extrabold",
    },
    link: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      color: "#110f01",
      fontSize: "15px",
      fontWeight: "extrabold",
    },
    title: {
      color: "#110f01",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "18px",
      textTransform: "uppercase",
    },
    subTitle: {
      color: "#110f01",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "16px",
      textTransform: "uppercase",
    },
    sections: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "16px",
    },
    section: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "flex-start",
      marginTop: "4px",
      paddingBottom: "20px",
      borderBottom: "1.5px #888780 solid",
    },
    lastSection: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "flex-start",
      marginTop: "4px",
    },
    paragraph: { color: "#110f01", fontSize: "15px", fontWeight: "extrabold" },
    experience: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "16px",
    },
    leftBloc: {
      width: "20%",
      color: "#110f01",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "16px",
    },
    rightBloc: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "4px",
    },
    content: {
      width: "100%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "16px",
    },
    leftContent: {
      width: "40%",
      color: "#110f01",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "15px",
    },
    rightContent: {
      width: "60%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    expParagraph: {
      color: "#110f01",
      fontSize: "15px",
      fontWeight: "extrabold",
      marginTop: "8px",
    },
    educationSection: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "16px",
    },
    expertiseSection: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "16px",
    },
    skill: {
      width: "100%",
      height: "4px",
      backgroundColor: "#b3b2ad",
      borderRadius: "8px",
    },
    skill_level: {
      width: "50%",
      height: "100%",
      backgroundColor: "#110f01",
    },
    skillContent: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
    },
    skills: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
  });

  Font.register({
    family: "Lexend",
    src: "href=https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap",
  });

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header} fixed>
          <View style={styles.headerLeftComponent}>
            <Text style={styles.name}>JONH DOE</Text>
            <Text style={styles.jobTitle}>Web & Graphic Designer</Text>
          </View>

          <View>
            <View style={styles.links}>
              <View style={styles.link}>
                <IoMdCall size={18} />
                <Text>+1 111 111 111</Text>
              </View>

              <View style={styles.link}>
                <FaEnvelope size={16} />
                <Text>jonhdoe@gmail.com</Text>
              </View>

              <View style={styles.link}>
                <IoEarthSharp size={18} />
                <Text>www.jonhdoe.com</Text>
              </View>

              <View style={styles.link}>
                <MdLocationPin size={20} />
                <Text>Country, City, CA015</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>ABOUT ME</Text>

          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officiis
            beatae non assumenda molestiae, aut, ut dolore iusto alias nam unde
            necessitatibus quia. Atque harum deserunt explicabo itaque,
            recusandae facere.
          </Text>
        </View>

        <View style={styles.section} wrap>
          <Text style={styles.title}>EXPERIENCE</Text>

          <View style={styles.experience}>
            <View style={styles.leftBloc}>
              <Text>2023 - 2024</Text>
            </View>

            <View style={styles.rightBloc}>
              <Text style={styles.subTitle}>WEB DESIGNER</Text>

              <Text style={styles.subTitle}>Company name - USA</Text>

              <Text style={styles.expParagraph}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                cumque consequuntur soluta perspiciatis eligendi, pariatur,
                numquam odit quaerat modi recusandae ad dolore repellendus est
                minima similique fugiat necessitatibus doloremque corporis.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section} wrap>
          <View style={styles.sections}>
            <View style={styles.educationSection}>
              <Text style={styles.title}>EDUCATION</Text>
              <View style={styles.content}>
                <View style={styles.leftContent}>
                  <Text>2023 - Present</Text>
                </View>

                <View style={styles.rightContent}>
                  <Text style={styles.subTitle}>WEB DESIGNER</Text>

                  <Text style={styles.paragraph}>Company name - USA</Text>
                </View>
              </View>
            </View>

            <View style={styles.expertiseSection}>
              <Text style={styles.title}>EXPERTISE</Text>

              <View style={styles.skills}>
                <View style={styles.skillContent}>
                  <View style={styles.leftContent}>
                    <Text>HTML</Text>
                  </View>

                  <View style={styles.skill}>
                    <View style={styles.skill_level} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Model4;
