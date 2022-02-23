from flask import Flask, jsonify, request
import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as F
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)

class DataNet(nn.Module):
  def __init__(self, with_image_net = False):
    super(DataNet, self).__init__()
    if with_image_net:
      self.linear_1 = nn.Linear(35 + 16, 64)
    else:
      self.linear_1 = nn.Linear(19, 64) #this is the number i change the 36
    self.linear_2 = nn.Linear(64, 128)
    self.linear_4 = nn.Linear(128, 128)
    self.linear_5 = nn.Linear(128, 1)

    self.batch_norm1 = nn.BatchNorm1d(128)
    self.batch_norm2 = nn.BatchNorm1d(256)

    self.dropout1 = nn.Dropout(p = 0.25)
    self.dropout2 = nn.Dropout(p = 0.5)

  def forward(self, x):
    x = F.relu(self.linear_1(x))
    x = F.relu(self.linear_2(x))
    x = self.dropout1(x)
    x = F.relu(self.linear_4(x))
    x = self.linear_5(x)
    return x

model = DataNet()
model.load_state_dict(torch.load('./la_net.pt', map_location='cpu'))
model.eval()

@app.route('/')
def hello():
    sample = np.array([2595.0, 2.0, 4.0, 2595.0, 0.0, 0, 0, 0, 1354177.0, 9609.000000, 0, 0, 0, 0, 0, 34.337306, -118.15529, 33.704538, -118.668176])
    data = torch.tensor(sample)
    data = data.to('cpu').float()
    output = model.forward(data)
    return jsonify({'prediction': output.item()})

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    sample = []
    for elt in request.json:
        sample.append(float(request.json[elt]))
    print(sample)
    sample = np.array(sample)
    data = torch.tensor(sample)
    data = data.to('cpu').float()
    output = model.forward(data)
    return jsonify({'prediction': output.item()})
