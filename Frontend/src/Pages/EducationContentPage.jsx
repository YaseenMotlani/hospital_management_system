import React from "react";
import Layout from "../Components/Common/Layout";
import EducationContent from "../Components/education/EducationContent";

const EducationContentPage = () => {
  return (
    <Layout title="Educations Info">
      <div className="py-2 px-4 h-100">
        <EducationContent />
      </div>
    </Layout>
  );
};

export default EducationContentPage;


