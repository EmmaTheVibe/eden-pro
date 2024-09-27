import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Initialize Firestore

// Function to submit email
export const submitEmail = async (email) => {
  const emailsDocRef = doc(db, "emails", "emailList"); // The document will be "emailList" in the "emails" collection

  try {
    // Get the existing document
    const docSnapshot = await getDoc(emailsDocRef);

    if (docSnapshot.exists()) {
      const emailArray = docSnapshot.data().emails || [];

      // Add the new email to the array
      const updatedEmails = [...emailArray, email];

      // Update the document with the new email array
      await setDoc(emailsDocRef, { emails: updatedEmails }, { merge: true });
    } else {
      // If the document does not exist, create a new one with the email
      await setDoc(emailsDocRef, { emails: [email] });
    }

    return "Email successfully submitted!";
  } catch (error) {
    console.error("Error submitting email: ", error);
    throw new Error("Failed to submit email");
  }
};
