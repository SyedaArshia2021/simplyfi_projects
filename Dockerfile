FROM httpd:2.4
COPY /var/lib/jenkins/workspace/job1/.  /usr/local/apache2/htdocs
