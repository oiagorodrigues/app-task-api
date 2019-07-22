# HTTP METHODS

## PUT

 - modifica um registro existente;
 - se o registro estiver vazio, será preenchido com os dados como se fosse um novo;
 - reenvia a requisição, utilizando o payload passado, caso ela falhe;
 - envia o conjunto completo de dados de um registro, mesmo que a modificação seja em apenas um atributo; ou seja, modifica o registro por completo;
 - requisições sucessivas, de sucesso, geram o mesmo resultado;
 - melhor utilizado em `major updates` do registro.

## PATCH

  - também modifica um registro existente;
  - não reenvia requisição, caso ela falhe;
  - envia apenas o atributo necessário para a modificação do registro;
  - requisições sucessivas, de sucesso, geram resultados diferentes;
  - melhor utilizado em `minor updates` do registro;

From the RFC:

> The difference between the PUT and PATCH requests is reflected in the way the server processes the enclosed entity to modify the resource identified by the Request-URI. In a PUT request, the enclosed entity is considered to be a modified version of the resource stored on the origin server, and the client is requesting that the stored version be replaced. With PATCH, however, the enclosed entity contains a set of instructions describing how a resource currently residing on the origin server should be modified to produce a new version. The PATCH method affects the resource identified by the Request-URI, and it also MAY have side effects on other resources; i.e., new resources may be created, or existing ones modified, by the application of a PATCH.

> see: https://williamdurand.fr/2014/02/14/please-do-not-patch-like-an-idiot/