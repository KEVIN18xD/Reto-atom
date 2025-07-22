##selector_Tipo
{{ 
  _.uniq(GetVehiculos.data.records
    .map(r => r.fields.Tipo)
    .filter(Boolean) // elimina null o undefined
  ).map(t => ({ label: t, value: t }))
}}

##Selector_Marca
{{ 
  _.uniq(GetVehiculos.data.records
    .map(r => r.fields.Marca)
    .filter(Boolean)
  ).map(m => ({ label: m, value: m }))
}}

##Datos_tabla
{{ BuscarFiltrados.data.records.map(r => ({
  ID: r.id,
  ...r.fields
})) }}
