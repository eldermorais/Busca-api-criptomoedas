const apiKey = '0b178a40-27f0-43b4-8476-01926727094a'

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey}`)
.then((response) => {
  if(!response.ok) throw new Error(`erro ao executar a requisição, status ${response.status}`)
  return response.json()
})
.then((api) => {
  let texto = "";

  for(let i = 0; i < 10; i++){
    texto = texto + `
                  
    <div class="media">
      <img src="/coin.png" class="align-self-center mr-3" alt="coin" width="60" height="60">
      <div class="media-body">
        <h5 class="mt-2">${api.data[i].name}</h5>
        <p>${api.data[i].symbol}</p>
        <p>${api.data[i].first_historical_data}</p>
      </div>
    </div>`;

    document.getElementById("coins").innerHTML = texto;
                    
  }
})
.catch((error) => {
  console.error(error.message);
});