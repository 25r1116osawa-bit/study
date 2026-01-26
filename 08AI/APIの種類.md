```mermaid
graph LR
  API["API<br/>(Application Programming Interface)"]

  API --> WebAPI["Web API"]
  API --> LocalAPI["ローカルAPI"]

  WebAPI --> REST["REST API"]
  WebAPI --> SOAP["SOAP API"]
  WebAPI --> GraphQL["GraphQL API"]

  REST --> REST_EX1["リソース操作用HTTP API"]
  REST --> REST_EX2["Google Maps API"]

  SOAP --> SOAP_EX1["XMLベース通信"]
  SOAP --> SOAP_EX2["PayPal API"]
  SOAP --> SOAP_EX3["Amazon AWS API"]

  GraphQL --> GQL_EX1["GitHub GraphQL API"]
  GraphQL --> GQL_EX2["Shopify GraphQL API"]

  LocalAPI --> Native["ネイティブAPI"]
  LocalAPI --> Library["ライブラリAPI"]
  LocalAPI --> RPC["RPC API"]
  LocalAPI --> Kernel["カーネルAPI"]

  Native --> N_EX1["Windows API"]
  Native --> N_EX2["Android API"]

  Library --> L_EX1["NumPy API"]
  Library --> L_EX2["TensorFlow API"]

  RPC --> R_EX1["gRPC"]
  RPC --> R_EX2["Ethereum JSON-RPC"]

  Kernel --> K_EX1["Linux system calls"]
  Kernel --> K_EX2["Windows NT Kernel API"]
