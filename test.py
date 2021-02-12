from urllib.request import urlopen
from bs4 import BeautifulSoup
import unittest
class Test(unittest.TestCase):
   bs = None
   def setUpClass():
      url = '<a target="_blank" rel="nofollow" href="http://3.101.54.80:8082'</a>
      Test.bs = BeautifulSoup(urlopen(url), 'html.parser')
   def test_titleText(self):
      pageTitle = Test.bs.find('h1').get_text()
      self.assertEqual('Congratulations', pageTitle);
if __name__ == '__main__':
   unittest.main()
