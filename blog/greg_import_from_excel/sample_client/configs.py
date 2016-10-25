conf = {
    'host': "localhost",
    'port': 9443,
    'artifact_type': 'car',
    'media-type': 'application/vnd.knnect-car+xml',
    'username': 'admin',
    'password': 'admin',
    'excel_file': './sample_greg_import_cars_excel_sheet.xlsx' # sample file in https://goo.gl/iOjb9g
}

conf['artifact_endpoint'] = "https://{host}:{port}/resource/1.0.0/artifact/".format(host=conf['host'],
                                                                                    port=conf['port'])
conf['reg_path'] = "_system/governance/trunk/{artifact_type}/".format(artifact_type=conf['artifact_type'])
