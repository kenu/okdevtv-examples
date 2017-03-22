import pandas as pd
data = pd.read_csv('data/bar.csv')
print(data)

print(data['Count'])

import matplotlib.pyplot as plt
plt.plot(data['Count'], 'yo--')
plt.show()