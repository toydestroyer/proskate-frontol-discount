function BeforeAct(AO, RO, E, O, CO) {}

function AfterAct(AO, RO, E, O, CO) {}

function FuncAct(AO, RO, CO) {}

function NoAction(AO, RO, E, O, CO) {
  var MinPos = null;
  for (RO.Pos.Index = 1; RO.Pos.Index <= RO.Pos.Count; RO.Pos.Index++) {
    if (RO.Pos.Storno) {
      continue;
    }
    if (MinPos == null) {
      MinPos = RO.Pos.Price;
    } else {
      if (MinPos > RO.Pos.Price) {
        MinPos = RO.Pos.Price;
      }
    }
  }
  var count = 0;
  for (RO.Pos.Index = 1; RO.Pos.Index <= RO.Pos.Count; RO.Pos.Index++) {
    if (RO.Pos.Storno) {
      continue;
    }
    count += RO.Pos.Quantity;
  }
  if (count >= 3) {
    return MinPos;
  }
}
