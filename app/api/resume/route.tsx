import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { resumeData } from "@/data/resume_constants";

// Define Education type for proper TypeScript support
interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  percentage?: string;
}

// ATS-Compliant Resume Styles
// Adjusted spacing for ~1.5 page length
const styles = StyleSheet.create({
  page: {
    padding: 45,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#333333",
    lineHeight: 1.5,
  },
  // Header Section
  header: {
    textAlign: "center",
    marginBottom: 20,
    paddingBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: "#333333",
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#000000",
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 12,
    color: "#555555",
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 6,
  },
  contactItem: {
    fontSize: 9,
    color: "#333333",
  },
  contactSeparator: {
    fontSize: 9,
    color: "#999999",
  },
  contactLink: {
    fontSize: 9,
    color: "#0066cc",
    textDecoration: "none",
  },
  // Section Styles - increased margins for 1.5 page
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#000000",
    marginBottom: 10,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  // Summary
  summaryText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#333333",
  },
  // Skills
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 6,
  },
  skillCategory: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#333333",
  },
  skillsList: {
    fontSize: 10,
    color: "#444444",
  },
  // Experience - increased spacing
  experienceItem: {
    marginBottom: 16,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 3,
  },
  experienceRole: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#000000",
    flex: 1,
  },
  experienceDuration: {
    fontSize: 10,
    color: "#555555",
  },
  experienceCompany: {
    fontSize: 10,
    fontFamily: "Helvetica-Oblique",
    color: "#444444",
    marginBottom: 6,
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 4,
    paddingLeft: 8,
  },
  bullet: {
    width: 12,
    fontSize: 10,
    color: "#333333",
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    color: "#333333",
    lineHeight: 1.5,
  },
  // Projects - increased spacing
  projectItem: {
    marginBottom: 12,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 3,
  },
  projectName: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#000000",
  },
  projectRole: {
    fontSize: 9,
    color: "#555555",
    fontFamily: "Helvetica-Oblique",
  },
  projectDescription: {
    fontSize: 10,
    color: "#444444",
    marginBottom: 3,
    lineHeight: 1.5,
  },
  projectTech: {
    fontSize: 9,
    color: "#555555",
  },
  // Education - increased spacing
  educationItem: {
    marginBottom: 10,
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  educationDegree: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#000000",
    flex: 1,
  },
  educationDuration: {
    fontSize: 10,
    color: "#555555",
  },
  educationInstitution: {
    fontSize: 10,
    color: "#444444",
    marginBottom: 2,
  },
  educationScore: {
    fontSize: 9,
    color: "#555555",
    fontFamily: "Helvetica-Oblique",
  },
});

// ATS-Compliant Resume Document Component
const ResumeDocument = () => {
  const { personal, summary, skills, experience, projects, education } = resumeData;

  // Helper function to get score text (GPA or Percentage)
  const getScoreText = (edu: Education): string | null => {
    if (edu.gpa) {
      return `CGPA: ${edu.gpa}`;
    }
    if (edu.percentage) {
      return `Percentage: ${edu.percentage}%`;
    }
    return null;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header - Centered, Clean */}
        <View style={styles.header}>
          <Text style={styles.name}>{personal.name}</Text>
          <Text style={styles.title}>{personal.title}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{personal.email}</Text>
            <Text style={styles.contactSeparator}> | </Text>
            <Text style={styles.contactItem}>{personal.phone}</Text>
            <Text style={styles.contactSeparator}> | </Text>
            <Text style={styles.contactItem}>{personal.location}</Text>
          </View>
          <View style={{ ...styles.contactRow, marginTop: 4 }}>
            <Link src={`https://${personal.linkedin}`} style={styles.contactLink}>
              {personal.linkedin}
            </Link>
            <Text style={styles.contactSeparator}> | </Text>
            <Link src={`https://${personal.github}`} style={styles.contactLink}>
              {personal.github}
            </Link>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>{summary}</Text>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          {Object.entries(skills).map(([category, skillList]) => (
            <View key={category} style={styles.skillsRow}>
              <Text style={styles.skillCategory}>
                {category.charAt(0).toUpperCase() + category.slice(1)}:{" "}
              </Text>
              <Text style={styles.skillsList}>{skillList.join(", ")}</Text>
            </View>
          ))}
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceRole}>{exp.role}</Text>
                <Text style={styles.experienceDuration}>{exp.duration}</Text>
              </View>
              <Text style={styles.experienceCompany}>
                {exp.company}, {exp.location}
              </Text>
              {exp.responsibilities.map((resp, respIndex) => (
                <View key={respIndex} style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{resp}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Key Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Projects</Text>
          {projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectRole}>{project.role}</Text>
              </View>
              <Text style={styles.projectDescription}>{project.description}</Text>
              <Text style={styles.projectTech}>
                Technologies: {project.technologies.join(", ")}
              </Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {(education as Education[]).map((edu, index) => {
            const scoreText = getScoreText(edu);
            return (
              <View key={index} style={styles.educationItem}>
                <View style={styles.educationHeader}>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  <Text style={styles.educationDuration}>{edu.duration}</Text>
                </View>
                <Text style={styles.educationInstitution}>
                  {edu.institution}, {edu.location}
                </Text>
                {scoreText && (
                  <Text style={styles.educationScore}>{scoreText}</Text>
                )}
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export async function GET() {
  try {
    const pdfBuffer = await renderToBuffer(<ResumeDocument />);
    
    // Convert Buffer to Uint8Array for NextResponse compatibility
    const uint8Array = new Uint8Array(pdfBuffer);

    return new NextResponse(uint8Array, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${resumeData.personal.name.replace(/\s+/g, "_")}_Resume.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
