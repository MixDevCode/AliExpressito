navigator.serviceWorker.register("sw.js",{scope:"/"});const tasa=3600;$("#tasa").val(3600),$("#tasaSpan").text(3600);let total=0,montoSinImpuestos=0,impPais=0,impGanancia=0,impBienesPersonales=0,excedente=0;const formatoMoneda=new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"});function changeDolar(){let e=$("#bancoSelect"),t=new Date().toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit",year:"numeric"});$("#dolar").text(e.val()),$("#fecha").text(t)}$("#bancoSelect").select2({language:{noResults:function(){return"No se encontraron resultados..."}}}),$("#valores").select2(),$("#valores").on("select2:opening select2:closing",function(e){$(this).parent().find(".select2-search__field").prop("disabled",!0)}),fetchDolarValuesJSONP(buildDolarSelect),changeDolar(),$("input").on("input",function(){$("#esHistorial").val("false")}),$("#bancoSelect").on("change",function(){$("#esHistorial").val("false")});