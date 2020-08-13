from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId

app= Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/pythonreactdb'

mongo=PyMongo(app)

CORS(app)
db=mongo.db.users

@app.route('/users', methods=['POST'])
def createUser():
    id=db.insert({
        'name': request.json['name'],
        'email': request.json['email'],
        'password': request.json['password']
    })
    return jsonify(str(ObjectId(id)))


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

"""

@app.route('/allGraph')
def allGraph():

    edges = Graph.graph.edges

    newList = []

    for i in range(0, len(edges)):

        current = [edges[i].start,edges[i].end,edges[i].cost]

        newList.append(current)

    return jsonify(newList)


@app.route('/dijkstra')
def dijkstra():

    start = request.args.get('start')
    end = request.args.get('end')

    dijkstraList = Graph.graph.dijkstra(start,end)

    return jsonify(dijkstraList)

@app.route('/addEdge')
def addEdge():

    start = request.args.get('start')
    end = request.args.get('end')

    Graph.graph.add_edge(start,end)

    return None

@app.route('/removeEdge')
def removeEdge():

    start = request.args.get('start')
    end = request.args.get('end')

    Graph.graph.remove_edge(start,end)

    return None

"""

if __name__ == "__main__":
    app.run(debug=True)
