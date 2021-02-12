from urllib.request import urlopen
from bs4 import BeautifulSoup
import unittest
class Test(unittest.TestCase):
   bs = None
   def setUpClass():
      url = 'http://13.57.214.107:8082'
      Test.bs = BeautifulSoup(urlopen(url), 'html.parser')
   def test_titleText(self):
      pageTitle = Test.bs.find('h1').get_text()
      self.assertEqual(' Congratulations folks!! ', pageTitle);
if __name__ == '__main__':
   unittest.main()
