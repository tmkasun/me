conf = {
    'host': "localhost",
    'port': 9443,
    'artifact_type': 'car',
    'username': 'admin',
    'password': 'admin',
    'excel_file': './sample_greg_import_cars_excel_sheet.xlsx'  # sample file in https://goo.gl/iOjb9g
}

conf['artifact_endpoint'] = "https://{host}:{port}/governance/{artifact_type}s".format(host=conf['host'],
                                                                                       # Note the s at the end of URL, It is there to make it plural of the word used in asset type
                                                                                       # (well it's true that by putting s we can't make all the words plural) but that is How Its Made :)
                                                                                       port=conf['port'],
                                                                                       artifact_type=conf[
                                                                                           'artifact_type']
                                                                                       )
