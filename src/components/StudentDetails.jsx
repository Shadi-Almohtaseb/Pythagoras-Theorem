import React from "react";

const StudentDetails = () => {
  return (
    <div className="lg:absolute m-10 top-20 right-24 flex flex-col gap-1">
      <span className="text-2xl bg-cyan-500 text-right px-8 py-5 rounded-xl text-white">
        <p>:عمل الطالبتين</p>
        <p>حلا ابو خالد -</p>
        <p>عرين شريف -</p>
      </span>
      <span className="text-2xl bg-cyan-500 text-right px-8 py-5 rounded-xl text-white">
        بإشراف المعلمة: اريج سلطان
      </span>
      <span className="text-2xl bg-cyan-500 text-right px-8 py-5 rounded-xl text-white">
        مدرسة الدكتور حافظ عبد النبي النتشة
      </span>
    </div>
  );
};

export default StudentDetails;
