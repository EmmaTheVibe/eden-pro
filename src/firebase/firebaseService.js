import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const submitEmail = async (email) => {
  const emailsDocRef = doc(db, "emails", "emailList");

  try {
    const docSnapshot = await getDoc(emailsDocRef);

    if (docSnapshot.exists()) {
      const emailArray = docSnapshot.data().emails || [];

      const updatedEmails = [...emailArray, email];

      await setDoc(emailsDocRef, { emails: updatedEmails }, { merge: true });
    } else {
      await setDoc(emailsDocRef, { emails: [email] });
    }

    return "Email successfully submitted!";
  } catch (error) {
    console.error("Error submitting email: ", error);
    throw new Error("Failed to submit email");
  }
};
