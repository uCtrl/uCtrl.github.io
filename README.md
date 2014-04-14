# µCtrl Protocol definition
---

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
## Communication

All the requests are supposed to come out of the application to the platform. So, the communication is breakdown in two types: Requests and Responses.

**EVERY JSON SHOULD END WITH AN EOT CHARACTER**

### Requests

#### Shell
The shell for requests is:

```json
{
   "messageType": X,
   "YYY": {...}
}
```
where X is the enum of the request (number) and YYY is the additional information required.

#### Get

##### GetPlatform (1)
This request will return name of the platform, room and other addtional information.
```json
{
   "messageType":1
}
```
##### GetDevices (3)
This request will return an array of Devices containing basic information on the devices.
```json
{
   "messageType":3
}
```
##### GetScenarios (5)
This request will return an array of Scenarios based on the deviceId.
```json
{
   "messageType":5,
   "deviceId": X
}
```
Where X is the real device Id
##### GetTasks (7)
This request will return an array of Tasks based on the scenarioId.
```json
{
   "messageType":7,
   "scenarioId": X
}
```
Where X is the real scenario Id
##### GetConditions (9)
This request will return an array of Conditions based on the taskId.
```json
{
   "messageType":9,
   "TaskId": X
}
```
Where X is the real task Id

#### Save
##### SavePlatform (11)
This request will send basic informations on the platform.
```json
{
   "messageType":11,
   "platform": {
      "id":1,
      "enabled":"ON",
      "name":"Television Set",
      "room":"Living room"
   }
}
```
##### SaveDevices (13)
This request will send an array of devices.
```json
{
   "messageType":13,
   "devices": [
      {
         "id":2,
         "maxValue":100,
         "minValue":0,
         "name":"Temperature A",
         "precision":5,
         "type":1,
         "unitLabel":"\u00B0C",
         "isTriggerValue":false
      },
      {
         ...
      }
    ]
}
```
##### SaveScenarios (15)
This request will send an array of scenarios for the device (deviceId).
```json
{
   "messageType":15,
   "deviceId":2,
   "scenarios": [
      {
         "id":3,
         "name":"Semaine"
      },
      {
         ...
      }
    ]
}
```
##### SaveTasks (17)
This request will send an array of tasks for the scenario (scenarioId).
```json
{
   "messageType":17,
   "scenarioId":3,
   "tasks": [
      {
         "id":4,
         "status":"21"
      },
      {
         ...
      }
    ]
}
```
##### SaveConditions (19)
This request will send an array of tasks for the task (taskId).
```json
{
   "messageType":19,
   "taskId":4,
   "conditions": [
      {
         "id":5,
         "type":1,
         "beginDate":"2014-03-31",
         "endDate":"2014-03-31"
      },
      {
         ...
      }
    ]
}
```
### Response

#### The Shell
The shell for responses is:

```json
{
   "messageType": X,
   "status": OK (true) | ERROR (false),
   "error" : NULL | "Error string",
   "YYY": {...}
}
```
where X is the enum of the response (number) and YYY is the additional information required.

#### GetPlatform (2)
This is the response from GetPlatform Request (1)
```json
{
   "messageType": 2,
   "status": true,
   "error" : NULL,
   "platform": {
      "id":1,
      "enabled":"ON",
      "name":"Television Set",
      "room":"Living room"
   }
}
```
#### GetDevices (4)
This is the response from GetDevice Request (3)
```json
{
   "messageType": 4,
   "status": true,
   "error" : NULL,
   "devices": [
      {
         "id":2,
         "maxValue":100,
         "minValue":0,
         "name":"Temperature A",
         "precision":5,
         "type":1,
         "unitLabel":"\u00B0C",
         "isTriggerValue":false
      },
      {
         ...
      }
    ]
}
```
#### GetScenarios (6)
This is the response from GetScenarios Request (5)
```json
{
   "messageType": 6,
   "status": true,
   "error" : NULL,
   "deviceId":2,
   "scenarios": [
      {
         "id":3,
         "name":"Semaine"
      },
      {
         ...
      }
    ]
}
```
#### GetTasks (8)
This is the response from GetTasks Request (7)
```json
{
   "messageType": 8,
   "status": true,
   "error" : NULL,
   "scenarioId":3,
   "tasks": [
      {
         "id":4,
         "status":"21"
      },
      {
         ...
      }
    ]
}
```
#### GetConditions (10)
This is the response from GetConditions Request (9)
```json
{
   "messageType": 10,
   "status": true,
   "error" : NULL,
   "taskId":4,
   "conditions": [
      {
         "id":5,
         "type":1,
         "beginDate":"2014-03-31",
         "endDate":"2014-03-31"
      },
      {
         ...
      }
    ]
}
```
#### SavePlatform (12)
This is the response from SavePlatform Request (11)
```json
{
   "messageType": 12,
   "status": true,
   "error" : NULL
}
```
#### SaveDevices (14)
This is the response from SaveDevices Request (13)
```json
{
   "messageType": 14,
   "status": true,
   "error" : NULL
}
```
#### SaveScenarios (16)
This is the response from SaveScenarios Request (15)
```json
{
   "messageType": 16,
   "status": true,
   "error" : NULL
}
```
#### SaveTasks (18)
This is the response from SaveTasks Request (17)
```json
{
   "messageType": 18,
   "status": true,
   "error" : NULL
}
```
#### SaveConditions (20)
This is the response from SaveConditions Request (19)
```json
{
   "messageType": 20,
   "status": true,
   "error" : NULL
}
```