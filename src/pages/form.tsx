import Form from "@/components/Form";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  style: ["normal"],
});
const LoginPage: React.FC = () => {
  function addFormHandler(formData: any) {
    fetch(
      // "https://smart-waterbottle-c4d99-default-rtdb.firebaseio.com/data.json",
      "https://smart-waterbottle-439ba-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        mode: "no-cors",

        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      console.log("success");
    });
  }

  return (
    <div className={poppins.className}>
      <Form onAddData={addFormHandler} />
    </div>
  );
};

export default LoginPage;
