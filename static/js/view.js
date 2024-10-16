firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // Mostra o formuário de comentário
        $('#commentForm').show();
    } else {
        // Oculta o formulário de comentário
        $('#commentForm').hide();
    }
});