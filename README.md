
# Cypress ile web otomasyon


E2E testleriniz için Javascript ile Cypress framework oldukça kolay  ve kullanımı da çok basit .

Seleniuma göre çok daha kolay kurulum aşamaları var .

Ayrıca dokümantasyonu da oldukça kapsamlı . Daha fazla bilgi için -> https://www.cypress.io/ ziyaret edeilirsiniz.


öncelikle bir klasör oluşturdum  

mkdir cypress-auotomate

sonrasında bu klasörü VSCode ile açıyoruz.

## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/hakantektas/cypress-automate.git
```

Proje dizinine gidin

```bash
  cd my-project
```

Gerekli paketleri yükleyin

```bash
 npm install cypress --save-dev komutunu çalıştırıyoruz .
```
Kurulum işlemleri bu kadardı.

Cypress kolay ve anlaşılır bir dasboarda sahiptir . Ayrıca bir GUI ile karşımıza çıkar .
Bu GUI yi ayağa kaldırmak için aşağıdaki komutu çalıştıralım

npx cypress open 

veya  

npm komutlarını kullanmak istersek package.json dosyamıza aşağıdaki gibi ekleyelim ;

```bash
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}


Artık komutu proje kökünüzden şu şekilde çağırabilirsiniz:

npm run cypress:open


```

  
## Kullanım/Örnekler


testlerimizi koşmak için  ister gui üzerinden istersek terminal üzerinde koşabiliriz


```javascript

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })
})
```

  
## Testler


terminal üzerinden testlerimizi koşmak için .json dosyamıza aşağıdaki gibi koşmak istediğimiz browser'ı da parametre olarak belirtebiliriz
```javascript

"scripts": {
    "cy:run:chrome": "cypress run --browser chrome",
    "cy:run:firefox": "cypress run --browser firefox",
    "cypress:open": "cypress open"
  },

```


```bash
    npm run cy:run:chrome
```

## Ekler

Herhangi bir ek bilgi buraya gelir

  