# 📘 Tasks

Tasks es una aplicación de gestión de tareas (helpdesk).

## 🚀 Acerca de la construcción del webhook

Para la construcción del webhook es necesario el siguiente material de apoyo:
* https://docs.8base.com/docs/development-tools/cli/
* https://docs.8base.com/docs/8base-console/custom-functions/webhooks
* https://docs.8base.com/docs/getting-started/connecting-to-api/

Existen diversos vídeos en [8base Academy](https://www.youtube.com/watch?v=rtyHFnz-NGI&list=PLRNGpd-QarSNCfteyU4N2gqZwNKF_rqLQ) que pueden servir de referencia.

El webhook fue creado con el comando:

```sh
8base init task-8base-project -s "js" -f "webhook:taskIsCompleted"
```

Y durante su desarrollo se usó las librerías **apollo-boost**, **graphql** y **graphql-request** para poder hacer consultas con graphQL desde el webhook, a la consulta taskUpdate. Para el deployment basta con ejecutar el comando:

```sh
8base deploy
```