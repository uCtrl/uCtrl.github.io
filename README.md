# µCtrl Protocol definition

## System definition

We can pretty much serialize the whole system in a single JSON. The structure is a tree and these are the nodes:

`System > Platform > Device > Scenario > Task > Condition`

So, what's inside each node is subject to change, but here's the idea

Logically, we can't exchange a system JSON because the communication access points are on a platform. We will start with  Platform definition

#### Platform
```json
{
   "enabled":"ON",
   "id":1,
   "name":"Television Set",
   "room":"Living room",
   "devices":[
      ...
   ]
}
```
*When don't need to send ip or port property since we already have that information on both sides.* 


#### Device
```json
{
   "id":2,
   "maxValue":100,
   "minValue":0,
   "name":"Temperature A",
   "precision":5,
   "type":1,
   "unitLabel":"\u00B0C",
   "isTriggerValue":false,
   "scenarios":[
      ...
   ]
}
```

#### Scenario
```json
{
   "id":3,
   "name":"Semaine",
   "tasks":[
      ...
   ]
}
```

#### Task
```json
{
   "id":4,
   "status":"21",
   "conditions":[
      ...
   ]
```

#### Condition
```json
{
   "id":5,
   "type":1,
   "beginDate":"2014-03-31",
   "endDate":"2014-03-31"
}
ou
{
   "id":6,
   "type":3
}
```

## Requests

TODO...

## Response

TODO...