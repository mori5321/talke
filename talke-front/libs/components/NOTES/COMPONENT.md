## layouts
### 目的
modelsやuiを配置して、その位置関係を調整する。
grid, flex, padding, marginあたりを書くのが主になるはず。

## models
### 目的
プレゼンテーションにおけるのドメイン知識を表現する。
単一責任の法則っぽいものを意識する。

### 詳細
ほぼ見た目が一緒のコンポーネントであってもドメイン的な意味合いが異なるのであれば、このレイヤでは分割すべき。

例) Cardコンポーネント
- User用のCard
- Product用のCard

内包・包含するような関係も適宜分割して単一責任の法則を意識する。
例) 
- UserList
- UserPanel


## ui
### 目的
デザインの統一感を担保するために、汎用コンポーネントを提供する
