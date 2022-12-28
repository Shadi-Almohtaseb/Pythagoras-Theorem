import React from "react";

const StudentDetails = () => {
  return (
    <div className="lg:absolute m-10 top-20 right-24 flex flex-col gap-1">
      <span className="text-2xl bg-cyan-500 text-right px-8 py-5 rounded-xl text-white">
        عمل الطالب: يزن ابو خالد
      </span>
      <span className="text-2xl bg-cyan-500 text-right px-8 py-5 rounded-xl text-white">
        بإشراف المعلم: شادي المحتسب
      </span>
    </div>
  );
};

export default StudentDetails;
