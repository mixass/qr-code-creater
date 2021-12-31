function generateQRCode(){
    const qrurl = document.getElementById("qrcode").value;
    if (!qrurl) {
      alert('you should put a url')
      return; 
    }
    const url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + qrurl + '&amp;size=50x50';
    $('#barcode').attr('src', url);
  }