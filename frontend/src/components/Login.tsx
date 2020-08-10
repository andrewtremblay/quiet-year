import React from "react";
import firebase from "firebase";

function Login(props: any) {
  const { currentGame, setCurrentGame, currentUser, setCurrentUser } = props;
  const db = firebase.firestore();
  const [value, setValue] = React.useState("");
  const [saving, setSaving] = React.useState(false);

  if (currentGame !== "") {
    setCurrentGame("");
  }

  const createNewUser = async () => {
    setSaving(true);
    const userRef = await db.collection("users").add({
      name: value,
    });
    setCurrentUser(userRef.id);
    setSaving(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (saving || !value) return;
    createNewUser();
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={saving}
          type="text"
          className="input"
          value={value}
          placeholder="Set User Name"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Login;
