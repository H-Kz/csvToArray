こういう変換をする
行数・列数制限は基本的にないはず

||列の見出しA|列の見出しB|列の見出しC|
|---|---|---|---|
|行の見出し1|値A1|値B1|値C1|
|行の見出し2|値A2|値|値|
|行の見出し3|値|値|値|
|行の見出し4|値|値|値|
　
　　↓

```
{
  "行の見出し1":{
      "列の見出しA":"値A1"
      "列の見出しB":"値B1"
      "列の見出しC":"値C1"
  "行の見出し2":{
      "列の見出しA":"値A2"
      "列の見出しB":"値B2"
      "列の見出しC":"値C2"
  "行の見出し3":{
      "列の見出しA":"値A3"
      "列の見出しB":"値B3"
      "列の見出しC":"値C3"
}
```
