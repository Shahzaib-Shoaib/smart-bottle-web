import Form from "@/components/Form";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";

const poppins = Poppins({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  style: ["normal"],
});
const LoginPage: React.FC = () => {
  const router = useRouter();
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
      router.push("/thank-you");
    });
  }

  return (
    <div className={poppins.className}>
      <Form onAddData={addFormHandler} />
    </div>
  );
};

export default LoginPage;
