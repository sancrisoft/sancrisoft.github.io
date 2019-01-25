
//jQuery is required to run this code
$( document ).ready(function() {
    //Method to encrypt/decrypt content
    encrypt_decrypt_content();
});

function encrypt_decrypt_content() {
  if($('a.encrypt').length > 0) {
    $(document).on('click', 'a.encrypt', function() {
      const content = $('textarea[name="content"]').val();
      const key = CryptoJS.enc.Base64.parse("#base64Key#");
      const iv  = CryptoJS.enc.Base64.parse("#base64IV#");
      const dataDecrypted = CryptoJS.AES.encrypt(content, key, {iv: iv});
      const dataEncryptedText = dataDecrypted.toString();

      $('p.result').html(dataEncryptedText);
    });
    $(document).on('click', 'a.decrypt', function() {
      const content = $('textarea[name="content"]').val();
      var key = CryptoJS.enc.Base64.parse("#base64Key#");
      var iv  = CryptoJS.enc.Base64.parse("#base64IV#");
      var dataDecrypted = CryptoJS.AES.decrypt(content, key, {iv: iv});
      const dataDecryptedText = dataDecrypted.toString(CryptoJS.enc.Utf8);

      $('p.result').html(dataDecryptedText);
    });
  }
}
