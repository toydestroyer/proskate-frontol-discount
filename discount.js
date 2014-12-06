function BeforeAct(AO, RO, E, O, CO) {
  if (RO.Pos.Count >= 3) {
    var MinPos = null;
    for (RO.Pos.Index = 1; RO.Pos.Index <= RO.Pos.Count; RO.Pos.Index++) {
      if (MinPos == null) {
        MinPos = RO.Pos.Price;
      } else {
        if (MinPos > RO.Pos.Price) {
          MinPos = RO.Pos.Price;
        }
      }
    }

    MinPos = (MinPos / RO.Pos.Count);
    AO.ShowMessage('Вычитаем: ' + MinPos);

    for (RO.Pos.Index = 1; RO.Pos.Index <= RO.Pos.Count; RO.Pos.Index++) {
      RO.Pos.SetPrice(RO.Pos.Price - MinPos);
      AO.ShowMessage('Старая цена: ' + RO.Pos.Price + ', новая: ' + (RO.Pos.Price - MinPos));
    }
  }
}
