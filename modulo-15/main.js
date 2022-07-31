const newLocal = $(document).ready(function () {
  $("calcular").click(function () {
    const PrecioVenta = Number($("#precio").val());

    const CostosFijos = Number($("#costoFijo").val());

    const CostosVariables = Number($("#costoVariable").val());

    const PuntoEquilibrio = CostosFijos / (PrecioVenta - CostosVariables);

    $("caja").html(PuntoEquilibrio);
  });
});
