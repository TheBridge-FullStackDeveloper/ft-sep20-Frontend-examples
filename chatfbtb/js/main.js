let totalMessages = 0;

function initDatabase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCSSK446Yf4BcrsPwKhsfaEVYoBb5HFV5c",
    authDomain: "chatfstb.firebaseapp.com",
    databaseURL: "https://chatfstb.firebaseio.com",
    projectId: "chatfstb",
    storageBucket: "chatfstb.appspot.com",
    messagingSenderId: "897312335080",
    appId: "1:897312335080:web:b6e1e870dac9b141a1155d"
  };

  firebase.initializeApp(firebaseConfig);
}

function getMessages() {
  let database = firebase.database();
  let messagesRef = database.ref('messages/');

  messagesRef.on('value', function (snapshot) {
    let messages = snapshot.val();

    messages.map(function(messageObject) {
      writeMessage(messageObject.text);
    })
  });
}

function getMessagesOptimus() {
  firebase
    .database()
    .ref('messages/')
    .on('value', snapshot => {
      snapshot
        .val()
        .map(messageObject => {
          writeMessage(messageObject.text);
          totalMessages++;
        })
    });
}

function writeMessage(textMessage) {
  let textNode = document.createElement("p");
  textNode.innerText = textMessage;
  document.getElementById("messagesBox").appendChild(textNode);
}

function newMessage(textMessage) {
  let today = new Date();

  let messagesRef = firebase.database().ref('messages/');

  // WIP
  // messagesRef.set([...messagesRef, {
  //   currentdate: `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`,
  //   text: textMessage
  // }]);
}

initDatabase();
getMessagesOptimus();

document
  .getElementById("sendBtn")
  .addEventListener("click", () => {
    newMessage(document.getElementById("messageInput").value)
  });
