from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId
import Graph

app= Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/pythonreactdb'

mongo=PyMongo(app)

CORS(app)
db=mongo.db.users
dt=mongo.db.tickets

@app.route('/users/<name>,<email>,<password>', methods=['POST'])
def createUser(name, email, password):
    id=db.insert({
        'name': name,
        'email': email,
        'password': password
    })
    return jsonify(str(ObjectId(id)))

@app.route('/admin', methods=['POST'])
def getAdmin():
    requestBody=request.get_json()
    check=False
    if(db.find_one({'name':requestBody.get('username')}) and db.find_one({'password':requestBody.get('password')})):
        check=True
    return jsonify(check) 

@app.route('/users/<id>', methods=['DELETE'])
def deleteUsers(id):
    db.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'User deleted'})

@app.route('/users', methods=['GET'])
def getUsers():
    users=[]
    for doc in db.find():
        users.append({
            '_id':str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'email':doc['email'],
            'password':doc['password']
        })
    return jsonify(users)

@app.route('/ticketsU/<point>', methods=['GET'])
def getTicketsU(point):
    ticketsList=[]
    for doc in dt.find({'cedula':point}): 
        ticketsList.append({
            'cedula': doc['cedula'],
            'start': doc['start'],
            'end': doc['end'],
            'date': doc['date'],
            'route': doc['route']
        })
    return jsonify(ticketsList)

@app.route('/ticketsR/<point>', methods=['GET'])
def getTicketsR(point):
    ticketsList=[]
    for doc in dt.find({'route':point}): 
        ticketsList.append({
            'cedula': doc['cedula'],
            'start': doc['start'],
            'end': doc['end'],
            'date': doc['date'],
            'route': doc['route']
        })
    return jsonify(ticketsList)

@app.route('/ticketsD/<point>', methods=['GET'])
def getTicketsD(point):
    ticketsList=[]
    for doc in dt.find({'date':point}): 
        ticketsList.append({
            'cedula': doc['cedula'],
            'start': doc['start'],
            'end': doc['end'],
            'date': doc['date'],
            'route': doc['route']
        })
    return jsonify(ticketsList)

@app.route('/ticketsActive/<point>,<point2>', methods=['GET'])
def getTicketsActive(point, point2):
    check=True
    ticketsList=[]
    for doc in dt.find({'start':point}): 
        ticketsList.append({
            'cedula': doc['cedula'],
            'start': doc['start'],
            'end': doc['end'],
            'date': doc['date'],
            'route': doc['route']
        })
    for doc in dt.find({'end':point2}): 
        ticketsList.append({
            'cedula': doc['cedula'],
            'start': doc['start'],
            'end': doc['end'],
            'date': doc['date'],
            'route': doc['route']
        })
    if(ticketsList==[]):
        check=False
    return jsonify(check)


@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
    db.update_one({'_id': ObjectId(id)},
    {'$set':{
        'name': request.json['name'],
        'email':request.json['email'],
        'password':request.json['password']
    }})
    return jsonify({'msg': 'User updated'})

@app.route('/user/<id>', methods=['GET'])
def getUser(id):
    user=db.find_one({'_id':ObjectId(id)})
    return jsonify({
        '_id':str(ObjectId(user['_id'])),
        'name': user['name'],
        'email':user['email'],
        'password':user['password']
        })



@app.route('/allGraph', methods=['GET'])
def allGraph():

    edges = Graph.graph.edges

    newList = []

    for i in range(0, len(edges)):

        current = edges[i].start,edges[i].end,edges[i].cost

        newList.append(current)

    return jsonify(newList)


@app.route('/dijkstra/', methods=['GET'])
def dijkstra():

    start = request.args.get('start')
    end = request.args.get('end')
    print("_________________----------------------------------________________________")
    print(start, end)
    print("_________________----------------------------------________________________")
    dijkstraList = Graph.graph.dijkstra(start,end)
    if(dijkstraList[1]==[]):
        dijkstraList = Graph.graph.dijkstra(end,start)
    return jsonify({"cost": dijkstraList[0], "route": dijkstraList[1]})

@app.route('/addEdge/<start>,<end>,<cost>', methods=['POST'])
def addEdge(start, end, cost):
    check=True
    #start = request.args.get('start')
    #end = request.args.get('end')

    Graph.graph.add_edge(start,end, cost)

    return jsonify(check)

@app.route('/removeEdge/<start>,<end>', methods=['POST'])
def removeEdge(start, end):

    #start = request.args.get('start')
    #end = request.args.get('end')
    check=True
    Graph.graph.remove_edge(start,end)

    return jsonify(check)

@app.route('/saveUserTicket/<ced>,<start>,<end>,<date>', methods=['POST'])
def saveUsersTickets(ced,start,end,date):
    #file=route.split(",")
    #final=[]
    #for i in file:
        #final.append(i[1:-1])
    id=dt.insert({
        'cedula': ced,
        'start': start,
        'end': end,
        'date': date,
        

        
    })
    return jsonify(str(ObjectId(id)))




if __name__ == "__main__":
    app.run(debug=True)
