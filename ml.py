import pickle
import pandas as pd
import numpy as np

# testing_data = pd.read_excel('/home/kiani/awais/testingFYP.xlsx', engine='openpyxl')
# print(testing_data)
# infile = open('/home/kiani/awais/trained_Model.pkl','rb')
# new_dict = pickle.load(infile)
# print(testing_data.shape)
# data = np.array([[1, 1, 1,1, 1, 1   , 3, 4, 4, 4, 2, 2, 4, 3, 5, 5, 5, 5, 5, 5, 5, 5, 2, 4, 3, 3, 2, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 4, 1, 1, 4, 2, 2, 2, 2, 3]])
# print(data.shape)
# new_result = new_dict.predict(data)
# print(new_result)
# infile.close()


class Predictor:

    model = None

    def prepPredictor(self):
        infile = open('/home/kiani/awais/trained_Model.pkl','rb')
        self.model = pickle.load(infile)

    def predict(self, data):
        new_result = self.model.predict(data)
        return new_result[0]


