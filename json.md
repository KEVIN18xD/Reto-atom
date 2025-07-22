## json flujo n8n
{
  "name": "Reto_p2",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "daysInterval": 2,
              "triggerAtHour": 8
            }
          ]
        }
      },
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.2,
      "position": [
        -672,
        0
      ],
      "id": "7882dc3d-7ea3-4522-9eb6-a9a50e400d56",
      "name": "Schedule Trigger"
    },
    {
      "parameters": {
        "operation": "create",
        "base": {
          "__rl": true,
          "value": "appsDDHa3XI0AIb3q",
          "mode": "list",
          "cachedResultName": "Vehiculos_test",
          "cachedResultUrl": "https://airtable.com/appsDDHa3XI0AIb3q"
        },
        "table": {
          "__rl": true,
          "value": "tblxG9mopIkGUreRq",
          "mode": "list",
          "cachedResultName": "Hoja 1",
          "cachedResultUrl": "https://airtable.com/appsDDHa3XI0AIb3q/tblxG9mopIkGUreRq"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Año": "={{ $json.records[0]['Año'] }}",
            "Precio (USD)": "={{ $json.records[0]['Precio (USD)'] }}",
            "Tipo": "={{ $json.records[0].Tipo }}",
            "Tipo - Marca": "={{ $json.Tipo_Marca }}",
            "Marca": "={{ $json.records[0].Marca }}",
            "Modelo": "={{ $json.records[0].Modelo }}",
            "Información General": "={{ $json.records[0]['Información General'] }}",
            "Estado": "={{ $json.records[0].Estado }}",
            "Último Mantenimiento": "={{ $json.records[0]['Último Mantenimiento'] }}",
            "Id_ve": "={{ $json.records[0].ID }}"
          },
          "matchingColumns": [],
          "schema": [
            {
              "id": "Tipo",
              "displayName": "Tipo",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Tipo - Marca",
              "displayName": "Tipo - Marca",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Id_ve",
              "displayName": "Id_ve",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Marca",
              "displayName": "Marca",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Modelo",
              "displayName": "Modelo",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Año",
              "displayName": "Año",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "number",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Información General",
              "displayName": "Información General",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Precio (USD)",
              "displayName": "Precio (USD)",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "number",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Estado",
              "displayName": "Estado",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            },
            {
              "id": "Último Mantenimiento",
              "displayName": "Último Mantenimiento",
              "required": false,
              "defaultMatch": false,
              "canBeUsedToMatch": true,
              "display": true,
              "type": "string",
              "readOnly": false,
              "removed": false
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.airtable",
      "typeVersion": 2.1,
      "position": [
        80,
        -80
      ],
      "id": "db2277dd-3ca5-4ff8-8b3c-8de8ef3ad056",
      "name": "Create a record",
      "alwaysOutputData": true,
      "credentials": {
        "airtableTokenApi": {
          "id": "Xk9AtP0zMW1PAJ1m",
          "name": "Airtable Personal Access Token account"
        }
      },
      "onError": "continueErrorOutput"
    },
    {
      "parameters": {
        "authentication": "serviceAccount",
        "documentId": {
          "__rl": true,
          "value": "1AJQKudMmE8JUFgSMc2mJcD4uR_hUhF_fpqGYn4dO4hs",
          "mode": "list",
          "cachedResultName": "Vehiculos_test",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1AJQKudMmE8JUFgSMc2mJcD4uR_hUhF_fpqGYn4dO4hs/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Hoja 1",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1AJQKudMmE8JUFgSMc2mJcD4uR_hUhF_fpqGYn4dO4hs/edit#gid=0"
        },
        "combineFilters": "OR",
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.6,
      "position": [
        -480,
        0
      ],
      "id": "1f603004-c715-41e8-8def-e8d6531db53a",
      "name": "Get row(s) in sheet",
      "notesInFlow": false,
      "alwaysOutputData": false,
      "executeOnce": false,
      "retryOnFail": false,
      "credentials": {
        "googleApi": {
          "id": "R6AAS1zWh5A6ya3J",
          "name": "Google Service Account account"
        }
      }
    },
    {
      "parameters": {
        "jsCode": "const batchSize = 50;\nconst groupedData = items.reduce((acc, item, index) => {\n  const key = `${item.json.Tipo} - ${item.json.Marca}`;\n  if (!acc[key]) acc[key] = [];\n  \n  // Divide internamente si un grupo supera el batchSize\n  if (acc[key].length >= batchSize) {\n    const newKey = `${key}-${Math.floor(index / batchSize)}`;\n    if (!acc[newKey]) acc[newKey] = [];\n    acc[newKey].push({\n      ...item.json,\n      ID: `${newKey}-${index}-${Date.now()}`\n    });\n  } else {\n    acc[key].push({\n      ...item.json,\n      ID: `${key}-${index}-${Date.now()}`\n    });\n  }\n  return acc;\n}, {});\n\nreturn Object.entries(groupedData).map(([Tipo_Marca, records]) => ({\n  json: { Tipo_Marca, records }\n}));\n\n// 3. Debug: Verifica en el log (opcional)\nconsole.log(\"Total de lotes generados:\", output.length);\nreturn output;"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        -208,
        0
      ],
      "id": "2e0070c5-2571-45ee-9bfd-7874b468d3f6",
      "name": "Code1",
      "alwaysOutputData": false
    },
    {
      "parameters": {
        "jsCode": "// 1. Verificar respuesta\nif (!$input?.json) {\n  return { \n    json: { \n      error:$input.first().json.error , \n      message: $input.first().json.message\n    } \n  };\n}\n\nconst response = $input.all().json; // Tomamos el primer input (puedes iterar sobre $input.all() si hay múltiples)\n\n// 2. Inicializar acumuladores de errores\nconst errors = {\n  invalid_values: [],\n  missing_fields: [],\n  duplicates: [],\n  other_errors: []\n};\n\n// 3. Procesar errores (si existen)\nif (response.error) {\n  const error = response.error;\n  \n  // Caso 1: Error de validación (contiene múltiples errores)\n  if (error.type === \"VALIDATION_ERROR\" && Array.isArray(error.details?.errors)) {\n    error.details.errors.forEach(err => {\n      if (err.message.includes(\"invalid value\")) {\n        errors.invalid_values.push({\n          field: err.field,\n          value: err.value,\n          record_id: err.recordId\n        });\n      } else if (err.message.includes(\"missing field\")) {\n        errors.missing_fields.push(err.field);\n      }\n    });\n  }\n  // Caso 2: Error de tabla existente\n  else if (error.message.includes(\"Table already exists\")) {\n    return { \n      json: { \n        action: \"update_table\",\n        table: $node[\"Code\"].json.Tipo_Marca,\n        records: $node[\"Code\"].json.records\n      }\n    };\n  }\n  // Otros errores\n  else {\n    errors.other_errors.push(error.message);\n  }\n}\n\n// 4. Devolver todos los errores encontrados\nif (errors.invalid_values.length > 0 || errors.missing_fields.length > 0 || errors.other_errors.length > 0) {\n  return { \n    json: { \n      status: \"HAS_ERRORS\",\n      errors: errors,\n      error_count: errors.invalid_values.length + errors.missing_fields.length + errors.other_errors.length\n    } \n  };\n}\n\n// 5. Si no hay errores\nreturn null;"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        416,
        16
      ],
      "id": "018c17b8-8d2b-4788-a229-860ca8caba06",
      "name": "Code"
    },
    {
      "parameters": {
        "authentication": "serviceAccount",
        "operation": "append",
        "documentId": {
          "__rl": true,
          "value": "https://docs.google.com/spreadsheets/d/1UhgHOeFaO3fPnI2-Qcjbu6X7uKAAWT8q-nAvuXsbTds/edit?gid=0#gid=0",
          "mode": "url"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Hoja 1",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1UhgHOeFaO3fPnI2-Qcjbu6X7uKAAWT8q-nAvuXsbTds/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Error": "={{ $json.error }}",
            "Mensaje": "={{ $json.error.message }}"
          },
          "matchingColumns": [
            "Mensaje de status"
          ],
          "schema": [
            {
              "id": "Error",
              "displayName": "Error",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Mensaje",
              "displayName": "Mensaje",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.6,
      "position": [
        720,
        -64
      ],
      "id": "cfc3a548-0b75-4bb9-8ea7-0a8153fc709e",
      "name": "Append row in sheet",
      "credentials": {
        "googleApi": {
          "id": "R6AAS1zWh5A6ya3J",
          "name": "Google Service Account account"
        }
      }
    }
  ],
  "pinData": {},
  "connections": {
    "Schedule Trigger": {
      "main": [
        [
          {
            "node": "Get row(s) in sheet",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Get row(s) in sheet": {
      "main": [
        [
          {
            "node": "Code1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Create a record": {
      "main": [
        [],
        [
          {
            "node": "Code",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Code1": {
      "main": [
        [
          {
            "node": "Create a record",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Code": {
      "main": [
        [
          {
            "node": "Append row in sheet",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": true,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "fff22576-8c46-4d97-a6f9-1e34b961a893",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "24c583ba53598cadcfeb20a3e03339105103021dd4b9c262349d4a3d9f377b60"
  },
  "id": "AO6xbcJiVs97WTAk",
  "tags": []
}
