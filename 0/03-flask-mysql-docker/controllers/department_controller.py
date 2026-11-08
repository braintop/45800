from flask import jsonify, request
from models.department_model import DepartmentModel

class DepartmentController:

    @staticmethod
    def all():
        return jsonify(DepartmentModel.get_all())

    @staticmethod
    def one(department_id):
        department = DepartmentModel.get_by_id(department_id)

        if not department:
            return jsonify(
                {'error': 'Department not found'}
            ), 404

        return jsonify(department)

    @staticmethod
    def create():
        data = request.get_json(silent=True) or {} # get the data from the request = body from the request

        name = str(data.get('department_name', '')).strip()

        if not name:
            return jsonify(
                {'error': 'department_name is required'}
            ), 400

        new_id = DepartmentModel.create(name)

        if new_id is None:
            return jsonify(
                {'error': 'Could not create department'}
            ), 500

        return jsonify(
            {'message': 'Department created successfully',
             'department_id': new_id}
        ), 201
