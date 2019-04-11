// http://bl.ocks.org/nategood/2d5d7537597e340f968d

var lil_letters = [[[116.0, 176.0], [105.0, 176.0], [101.0, 169.5], [98.97959, 164.7347], [91.58672, 172.37755], [82.29506, 177.56335], [71.6157, 179.76204], [61.07868, 179.78374], [50.50552, 177.43414], [41.2803, 171.87859], [34.982918, 162.9923], [33.00374, 152.52832], [33.0, 142.0], [33.0, 131.0], [33.0, 120.0], [33.0, 109.0], [33.0, 98.0], [33.0, 87.0], [33.0, 76.0], [39.5, 72.0], [49.0, 73.0], [49.0, 84.0], [49.0, 95.0], [49.0, 106.0], [49.0, 117.0], [49.0, 128.0], [49.0, 139.0], [49.254326, 149.55753], [53.987892, 159.50217], [62.901234, 164.91357], [73.0448, 165.9392], [83.436195, 163.2298], [91.5, 156.5], [96.70168, 146.72241], [98.80628, 135.97496], [99.0, 125.5], [99.0, 114.5], [99.0, 103.5], [99.0, 92.5], [99.0, 81.5], [100.0, 72.0], [111.0, 72.0], [116.0, 77.5], [116.0, 88.5], [116.0, 99.5], [116.0, 110.5], [116.0, 121.5], [116.0, 132.5], [116.0, 143.5], [116.0, 154.5], [116.0, 165.5], [116.0, 176.0]], [[145.0, 72.0], [156.0, 72.0], [160.0, 78.5], [160.0, 89.0], [166.9096, 79.98063], [175.0, 73.5], [185.44897, 69.82653], [195.5639, 69.00267], [206.41896, 70.292274], [216.51796, 74.649704], [223.91795, 81.984375], [227.69638, 92.410034], [228.0, 103.0], [228.0, 114.0], [228.0, 125.0], [228.0, 136.0], [228.0, 147.0], [228.0, 158.0], [228.0, 169.0], [224.5, 176.0], [213.5, 176.0], [211.0, 168.0], [211.0, 157.0], [211.0, 146.0], [211.0, 135.0], [211.0, 124.0], [211.0, 113.0], [210.9596, 102.31877], [208.19386, 92.010216], [200.37999, 84.97997], [190.0, 83.00001], [179.71469, 84.86083], [170.61664, 91.13535], [164.74515, 99.91412], [161.63034, 110.49028], [161.0, 120.5], [161.0, 131.5], [161.0, 142.5], [161.0, 153.5], [161.0, 164.5], [161.0, 175.5], [151.0, 176.0], [145.0, 171.5], [145.0, 160.5], [145.0, 149.5], [145.0, 138.5], [145.0, 127.5], [145.0, 116.5], [145.0, 105.5], [145.0, 94.5], [145.0, 83.5], [145.0, 72.5], [145.0, 72.0]], [[336.0, 107.0], [325.0, 107.0], [317.86392, 102.189354], [313.29327, 92.67194], [305.06094, 86.01108], [293.99997, 83.99999], [284.06906, 85.89533], [275.20038, 92.28622], [269.6353, 100.76698], [266.2992, 111.34218], [265.06418, 122.4901], [265.29022, 132.60318], [267.33002, 143.38977], [272.01636, 153.57495], [279.24323, 161.28728], [289.17633, 165.47636], [299.6821, 165.64395], [309.49924, 161.52444], [316.29956, 152.79109], [319.62878, 142.1657], [328.0, 140.0], [336.80908, 141.72023], [334.6667, 152.22221], [330.33334, 162.22221], [323.66986, 170.29628], [314.25793, 176.2553], [303.63153, 179.27824], [293.47632, 179.99774], [282.165, 178.695], [272.25885, 174.99524], [263.08502, 168.255], [256.6018, 160.25174], [251.87558, 150.58542], [249.09117, 139.85616], [248.04037, 128.80702], [248.29585, 118.24852], [249.8491, 107.55326], [253.07788, 97.12259], [258.3988, 87.30647], [265.42114, 79.2908], [274.50757, 73.16735], [284.61584, 69.852844], [295.1437, 69.00873], [306.21017, 70.1537], [316.35583, 73.61479], [325.0421, 79.99392], [331.28925, 89.09918], [334.76904, 99.36687], [336.0, 107.0]], [[444.0, 130.0], [433.0, 130.0], [422.0, 130.0], [411.0, 130.0], [400.0, 130.0], [389.0, 130.0], [378.0, 130.0], [367.0, 130.0], [368.04166, 140.625], [372.04166, 150.625], [378.67493, 159.19926], [388.09296, 164.58264], [398.47433, 165.99702], [409.1355, 163.9881], [418.06274, 157.63988], [423.74304, 148.35416], [432.0, 145.0], [441.90405, 145.5293], [438.87402, 155.74219], [433.0381, 165.30469], [425.14737, 172.31198], [415.29614, 177.1715], [404.87192, 179.53513], [394.3524, 179.94609], [383.54214, 178.42795], [373.30896, 174.39107], [364.38013, 167.54433], [357.9551, 159.18489], [353.48596, 149.36491], [350.90894, 138.45291], [350.02524, 127.76992], [350.35318, 117.36511], [352.14908, 106.41693], [355.65143, 96.220955], [361.34216, 86.58748], [368.63052, 78.861046], [377.8346, 73.06173], [388.034, 69.87869], [398.51767, 69.0024], [409.4724, 70.2699], [420.03772, 74.07957], [428.66034, 79.7181], [435.94446, 87.99999], [440.45035, 97.31569], [442.7868, 108.30624], [443.75723, 119.39507], [444.00003, 129.99997], [444.0, 130.0]], [[367.0, 116.0], [378.0, 116.0], [389.0, 116.0], [400.0, 116.0], [411.0, 116.0], [422.0, 116.0], [425.68, 109.96], [422.5152, 99.5824], [416.008, 90.969604], [406.6, 85.44], [396.50153, 84.00369], [385.875, 86.12501], [376.5, 92.50001], [370.61987, 100.91993], [367.54166, 111.18055], [367.0, 116.0]], [[517.0, 86.0], [505.9413, 87.47959], [495.53317, 91.27551], [487.78125, 98.375], [484.09778, 108.714355], [483.0332, 119.42969], [483.0, 130.0], [483.0, 141.0], [483.0, 152.0], [483.0, 163.0], [483.0, 174.0], [474.5, 176.0], [466.0, 174.0], [466.0, 163.0], [466.0, 152.0], [466.0, 141.0], [466.0, 130.0], [466.0, 119.0], [466.0, 108.0], [466.0, 97.0], [466.0, 86.0], [466.0, 75.0], [473.5, 72.0], [482.0, 74.0], [482.0, 85.0], [484.21463, 87.358986], [490.7066, 78.56198], [498.84375, 71.8125], [509.50146, 69.00488], [517.0, 71.5], [517.0, 82.5], [517.0, 86.0]], [[569.0, 72.0], [569.0, 83.0], [560.5, 85.0], [552.0, 87.0], [552.0, 98.0], [552.0, 109.0], [552.0, 120.0], [552.0, 131.0], [552.0, 142.0], [552.0, 153.0], [553.16956, 163.54498], [562.8047, 166.0], [569.0, 170.0], [567.39795, 179.21745], [556.463, 179.99852], [545.8877, 178.58984], [537.84314, 172.23979], [536.0, 162.0], [536.0, 151.0], [536.0, 140.0], [536.0, 129.0], [536.0, 118.0], [536.0, 107.0], [536.0, 96.0], [536.0, 85.0], [525.5, 85.0], [521.0, 79.0], [524.5, 72.0], [535.5, 72.0], [536.0, 62.0], [536.0, 51.0], [538.5, 43.0], [549.5, 43.0], [552.0, 51.0], [552.0, 62.0], [552.5, 72.0], [563.5, 72.0], [569.0, 72.0]], [[587.0, 103.0], [588.656, 91.8616], [593.536, 82.0696], [601.61597, 74.997604], [612.04443, 70.85111], [622.696, 69.217606], [633.1756, 69.08923], [644.3257, 70.42768], [654.54004, 73.924034], [662.6598, 80.27663], [667.375, 90.437515], [668.0, 101.0], [668.0, 112.0], [668.0, 123.0], [668.0, 134.0], [668.0, 145.0], [668.0, 156.0], [670.81055, 165.4429], [681.0, 167.0], [681.0, 177.5], [671.17017, 179.9132], [660.6686, 178.8639], [653.3831, 171.87427], [648.66394, 168.59845], [639.2934, 174.37001], [629.18896, 178.24896], [618.3097, 179.94794], [607.594, 179.29767], [597.20215, 175.82716], [588.80176, 169.39645], [583.4053, 159.88165], [582.0035, 149.41696], [583.6155, 139.3935], [588.18365, 130.22449], [595.98517, 123.88461], [605.7449, 120.29591], [615.6574, 117.891975], [626.16, 116.91], [636.06824, 115.56569], [646.36743, 112.20409], [651.0, 103.5], [649.69336, 93.40445], [642.0864, 86.41976], [631.5278, 84.111115], [620.6666, 84.50001], [610.63116, 88.0503], [604.43256, 96.33019], [599.5, 103.0], [588.5, 103.0], [587.0, 103.0]], [[620.0, 166.0], [631.2552, 164.6448], [641.10474, 160.0752], [648.1897, 152.68875], [651.0, 142.5], [651.0, 131.5], [647.1111, 126.27778], [636.0, 128.5], [626.3755, 130.04282], [616.0417, 132.08333], [605.8067, 136.91333], [599.75543, 144.76326], [599.7913, 155.49345], [606.26996, 163.1203], [617.073, 165.90817], [620.0, 166.0]], [[715.0, 72.0], [715.0, 83.0], [715.0, 94.0], [715.0, 105.0], [715.0, 116.0], [715.0, 127.0], [715.0, 138.0], [715.0, 149.0], [715.0, 160.0], [715.0, 171.0], [709.5, 176.0], [698.5, 176.0], [698.0, 166.0], [698.0, 155.0], [698.0, 144.0], [698.0, 133.0], [698.0, 122.0], [698.0, 111.0], [698.0, 100.0], [698.0, 89.0], [698.0, 78.0], [702.5, 72.0], [713.5, 72.0], [715.0, 72.0]], [[715.0, 31.0], [715.0, 42.0], [714.5, 52.0], [703.5, 52.0], [698.0, 47.0], [698.0, 36.0], [703.5, 31.0], [714.5, 31.0], [715.0, 31.0]], [[743.0, 72.0], [754.0, 72.0], [758.0, 78.5], [758.0, 89.0], [764.90955, 79.98063], [773.0, 73.5], [783.449, 69.82653], [793.5639, 69.00267], [804.41895, 70.292274], [814.5176, 74.649704], [821.91797, 81.984375], [825.6964, 92.410034], [826.0, 103.0], [826.0, 114.0], [826.0, 125.0], [826.0, 136.0], [826.0, 147.0], [826.0, 158.0], [826.0, 169.0], [822.5, 176.0], [811.5, 176.0], [809.0, 168.0], [809.0, 157.0], [809.0, 146.0], [809.0, 135.0], [809.0, 124.0], [809.0, 113.0], [808.95953, 102.31877], [806.19385, 92.010216], [798.38, 84.97997], [788.0, 83.00001], [777.715, 84.86083], [768.6174, 91.13535], [762.7451, 99.91412], [759.6303, 110.49028], [759.0, 120.5], [759.0, 131.5], [759.0, 142.5], [759.0, 153.5], [759.0, 164.5], [759.0, 175.5], [749.0, 176.0], [743.0, 171.5], [743.0, 160.5], [743.0, 149.5], [743.0, 138.5], [743.0, 127.5], [743.0, 116.5], [743.0, 105.5], [743.0, 94.5], [743.0, 83.5], [743.0, 72.5], [743.0, 72.0]], [[890.0, 72.0], [890.0, 83.0], [881.5, 85.0], [873.0, 87.0], [873.0, 98.0], [873.0, 109.0], [873.0, 120.0], [873.0, 131.0], [873.0, 142.0], [873.0, 153.0], [874.16956, 163.54498], [883.8047, 166.0], [890.0, 170.0], [888.39795, 179.21745], [877.463, 179.99852], [866.8877, 178.58984], [858.84314, 172.23979], [857.0, 162.0], [857.0, 151.0], [857.0, 140.0], [857.0, 129.0], [857.0, 118.0], [857.0, 107.0], [857.0, 96.0], [857.0, 85.0], [846.5, 85.0], [842.0, 79.0], [845.5, 72.0], [856.5, 72.0], [857.0, 62.0], [857.0, 51.0], [859.5, 43.0], [870.5, 43.0], [873.0, 51.0], [873.0, 62.0], [873.5, 72.0], [884.5, 72.0], [890.0, 72.0]], [[972.0, 72.0], [983.0, 72.0], [988.7986, 75.29102], [985.0227, 85.63424], [981.2468, 95.977455], [977.47095, 106.32067], [973.69507, 116.663925], [969.9192, 127.007225], [966.1433, 137.35052], [962.36743, 147.69382], [958.59155, 158.03712], [954.8157, 168.3804], [951.0398, 178.7237], [947.2639, 189.06697], [943.5501, 199.02423], [937.8766, 208.60083], [929.8176, 215.72247], [919.18787, 218.92001], [909.03125, 218.21875], [905.0, 210.5], [906.9167, 202.30556], [917.7785, 202.57613], [925.78955, 196.34488], [930.16693, 186.86111], [933.83405, 176.47221], [930.8042, 166.50229], [927.2888, 156.0548], [923.9332, 146.08218], [920.41785, 135.63474], [916.90247, 125.18729], [913.3871, 114.73984], [909.8717, 104.29238], [906.3563, 93.84493], [902.84094, 83.397484], [899.32556, 72.950035], [908.5, 72.0], [916.9529, 74.858826], [920.4468, 85.34119], [923.9407, 95.82355], [927.4346, 106.30591], [930.92847, 116.78827], [934.42236, 127.27063], [937.91626, 137.75299], [941.25134, 147.75888], [944.6858, 148.2907], [948.39453, 137.9302], [952.1033, 127.56971], [955.812, 117.209206], [959.52075, 106.8487], [963.2295, 96.4882], [966.93823, 86.12769], [970.647, 75.76719], [972.0, 72.0]]];
var letters = [[[121.0, 181.0], [110.0, 181.0], [106.0, 174.5], [103.97959, 169.7347], [96.58672, 177.37755], [87.29506, 182.56335], [66.6157, 184.76204], [56.07868, 184.78374], [45.50552, 182.43414], [36.2803, 176.87859], [29.982917999999998, 167.9923], [28.00374, 157.52832], [28.0, 147.0], [28.0, 136.0], [28.0, 115.0], [28.0, 104.0], [28.0, 93.0], [28.0, 82.0], [28.0, 71.0], [34.5, 67.0], [44.0, 68.0], [44.0, 79.0], [44.0, 90.0], [44.0, 101.0], [44.0, 112.0], [44.0, 123.0], [44.0, 144.0], [44.254326, 154.55753], [48.987892, 164.50217], [57.901234, 169.91357], [68.0448, 170.9392], [88.436195, 168.2298], [96.5, 161.5], [101.70168, 151.72241], [103.80628, 140.97496], [104.0, 120.5], [104.0, 109.5], [104.0, 98.5], [104.0, 87.5], [104.0, 76.5], [105.0, 67.0], [116.0, 67.0], [121.0, 72.5], [121.0, 83.5], [121.0, 94.5], [121.0, 105.5], [121.0, 116.5], [121.0, 137.5], [121.0, 148.5], [121.0, 159.5], [121.0, 170.5], [121.0, 181.0]], [[140.0, 67.0], [151.0, 67.0], [155.0, 73.5], [155.0, 84.0], [161.9096, 74.98063], [170.0, 68.5], [190.44897, 64.82653], [200.5639, 64.00267], [211.41896, 65.292274], [221.51796, 69.649704], [228.91795, 76.984375], [232.69638, 87.410034], [233.0, 98.0], [233.0, 109.0], [233.0, 130.0], [233.0, 141.0], [233.0, 152.0], [233.0, 163.0], [233.0, 174.0], [229.5, 181.0], [218.5, 181.0], [216.0, 173.0], [216.0, 162.0], [216.0, 151.0], [216.0, 140.0], [216.0, 129.0], [216.0, 108.0], [215.9596, 97.31877], [213.19386, 87.010216], [205.37999, 79.97997], [195.0, 78.00001], [174.71469, 79.86083], [165.61664, 86.13535], [159.74515, 94.91412], [156.63034, 105.49028], [156.0, 125.5], [156.0, 136.5], [156.0, 147.5], [156.0, 158.5], [156.0, 169.5], [156.0, 180.5], [146.0, 181.0], [140.0, 176.5], [140.0, 165.5], [140.0, 154.5], [140.0, 143.5], [140.0, 132.5], [140.0, 111.5], [140.0, 100.5], [140.0, 89.5], [140.0, 78.5], [140.0, 67.5], [140.0, 67.0]], [[341.0, 102.0], [330.0, 102.0], [322.86392, 97.189354], [318.29327, 87.67194], [310.06094, 81.01108], [298.99997, 78.99999], [279.06906, 80.89533], [270.20038, 87.28622], [264.6353, 95.76698], [261.2992, 106.34218], [260.06418, 117.4901], [260.29022, 137.60318], [262.33002, 148.38977], [267.01636, 158.57495], [274.24323, 166.28728], [284.17633, 170.47636], [304.6821, 170.64395], [314.49924, 166.52444], [321.29956, 157.79109], [324.62878, 147.1657], [333.0, 145.0], [341.80908, 146.72023], [339.6667, 157.22221], [335.33334, 167.22221], [328.66986, 175.29628], [319.25793, 181.2553], [308.63153, 184.27824], [298.47632, 184.99774], [277.165, 183.695], [267.25885, 179.99524], [258.08502, 173.255], [251.60180000000003, 165.25174], [246.87558, 155.58542], [244.09117, 144.85616], [243.04037, 133.80702], [243.29585, 113.24852], [244.8491, 102.55326], [248.07788, 92.12259], [253.3988, 82.30647], [260.42114, 74.2908], [269.50757, 68.16735], [279.61584, 64.852844], [300.1437, 64.00873], [311.21017, 65.1537], [321.35583, 68.61479], [330.0421, 74.99392], [336.28925, 84.09918], [339.76904, 94.36687], [341.0, 102.0]], [[449.0, 125.0], [438.0, 125.0], [427.0, 125.0], [416.0, 125.0], [405.0, 125.0], [384.0, 125.0], [373.0, 125.0], [362.0, 125.0], [363.04166, 145.625], [367.04166, 155.625], [373.67493, 164.19926], [383.09296, 169.58264], [393.47433, 170.99702], [414.1355, 168.9881], [423.06274, 162.63988], [428.74304, 153.35416], [437.0, 150.0], [446.90405, 150.5293], [443.87402, 160.74219], [438.0381, 170.30469], [430.14737, 177.31198], [420.29614, 182.1715], [409.87192, 184.53513], [389.3524, 184.94609], [378.54214, 183.42795], [368.30896, 179.39107], [359.38013, 172.54433], [352.9551, 164.18489], [348.48596, 154.36491], [345.90894, 143.45291], [345.02524, 122.76992], [345.35318, 112.36511], [347.14908, 101.41693], [350.65143, 91.220955], [356.34216, 81.58748], [363.63052, 73.861046], [372.8346, 68.06173], [383.034, 64.87869], [393.51767, 64.0024], [414.4724, 65.2699], [425.03772, 69.07957], [433.66034, 74.7181], [440.94446, 82.99999], [445.45035, 92.31569], [447.7868, 103.30624], [448.75723, 114.39507], [449.00003, 124.99996999999999], [449.0, 125.0]], [[362.0, 121.0], [373.0, 121.0], [384.0, 121.0], [405.0, 121.0], [416.0, 121.0], [427.0, 121.0], [430.68, 114.96], [427.5152, 94.5824], [421.008, 85.969604], [411.6, 80.44], [401.50153, 79.00369], [380.875, 81.12501], [371.5, 87.50001], [365.61987, 95.91993], [362.54166, 116.18055], [362.0, 121.0]], [[522.0, 81.0], [510.9413, 82.47959], [500.53317, 86.27551], [492.78125, 93.375], [479.09778, 103.714355], [478.0332, 124.42969], [478.0, 135.0], [478.0, 146.0], [478.0, 157.0], [478.0, 168.0], [478.0, 179.0], [469.5, 181.0], [461.0, 179.0], [461.0, 168.0], [461.0, 157.0], [461.0, 146.0], [461.0, 135.0], [461.0, 124.0], [461.0, 103.0], [461.0, 92.0], [461.0, 81.0], [461.0, 70.0], [468.5, 67.0], [477.0, 69.0], [477.0, 80.0], [489.21463, 82.358986], [495.7066, 73.56198], [503.84375, 66.8125], [514.50146, 64.00488], [522.0, 66.5], [522.0, 77.5], [522.0, 81.0]], [[574.0, 67.0], [574.0, 78.0], [565.5, 80.0], [557.0, 82.0], [557.0, 93.0], [557.0, 114.0], [557.0, 125.0], [557.0, 136.0], [557.0, 147.0], [557.0, 158.0], [558.16956, 168.54498], [567.8047, 171.0], [574.0, 175.0], [572.39795, 184.21745], [561.463, 184.99852], [540.8877, 183.58984], [532.84314, 177.23979], [531.0, 167.0], [531.0, 156.0], [531.0, 145.0], [531.0, 134.0], [531.0, 123.0], [531.0, 102.0], [531.0, 91.0], [531.0, 80.0], [520.5, 80.0], [516.0, 74.0], [519.5, 67.0], [530.5, 67.0], [531.0, 57.0], [531.0, 46.0], [533.5, 38.0], [554.5, 38.0], [557.0, 46.0], [557.0, 57.0], [557.5, 67.0], [568.5, 67.0], [574.0, 67.0]], [[582.0, 98.0], [583.656, 86.8616], [588.536, 77.0696], [596.61597, 69.997604], [607.04443, 65.85111], [617.696, 64.217606], [638.1756, 64.08923], [649.3257, 65.42768], [659.54004, 68.924034], [667.6598, 75.27663], [672.375, 85.437515], [673.0, 96.0], [673.0, 107.0], [673.0, 128.0], [673.0, 139.0], [673.0, 150.0], [673.0, 161.0], [675.81055, 170.4429], [686.0, 172.0], [686.0, 182.5], [676.17017, 184.9132], [665.6686, 183.8639], [658.3831, 176.87427], [653.66394, 173.59845], [644.2934, 179.37001], [624.18896, 183.24896], [613.3097, 184.94794], [602.594, 184.29767], [592.20215, 180.82716], [583.80176, 174.39645], [578.4053, 164.88165], [577.0035, 154.41696], [578.6155, 144.3935], [583.18365, 135.22449], [590.98517, 128.88461], [600.7449, 115.29591], [610.6574, 112.891975], [621.16, 111.91], [641.06824, 110.56569], [651.36743, 107.20409], [656.0, 98.5], [654.69336, 88.40445], [647.0864, 81.41976], [636.5278, 79.111115], [615.6666, 79.50001], [605.63116, 83.0503], [599.43256, 91.33019], [594.5, 98.0], [583.5, 98.0], [582.0, 98.0]], [[615.0, 171.0], [636.2552, 169.6448], [646.10474, 165.0752], [653.1897, 157.68875], [656.0, 137.5], [656.0, 126.5], [652.1111, 121.27778], [641.0, 123.5], [631.3755, 125.04282], [611.0417, 127.08332999999999], [600.8067, 131.91333], [594.75543, 139.76326], [594.7913, 160.49345], [601.26996, 168.1203], [612.073, 170.90817], [615.0, 171.0]], [[720.0, 67.0], [720.0, 78.0], [720.0, 89.0], [720.0, 100.0], [720.0, 111.0], [720.0, 132.0], [720.0, 143.0], [720.0, 154.0], [720.0, 165.0], [720.0, 176.0], [714.5, 181.0], [693.5, 181.0], [693.0, 171.0], [693.0, 160.0], [693.0, 149.0], [693.0, 138.0], [693.0, 127.0], [693.0, 106.0], [693.0, 95.0], [693.0, 84.0], [693.0, 73.0], [697.5, 67.0], [718.5, 67.0], [720.0, 67.0]], [[720.0, 26.0], [720.0, 47.0], [719.5, 57.0], [698.5, 57.0], [693.0, 52.0], [693.0, 31.0], [698.5, 26.0], [719.5, 26.0], [720.0, 26.0]], [[738.0, 67.0], [749.0, 67.0], [753.0, 73.5], [753.0, 84.0], [759.90955, 74.98063], [768.0, 68.5], [788.449, 64.82653], [798.5639, 64.00267], [809.41895, 65.292274], [819.5176, 69.649704], [826.91797, 76.984375], [830.6964, 87.410034], [831.0, 98.0], [831.0, 109.0], [831.0, 130.0], [831.0, 141.0], [831.0, 152.0], [831.0, 163.0], [831.0, 174.0], [827.5, 181.0], [816.5, 181.0], [814.0, 173.0], [814.0, 162.0], [814.0, 151.0], [814.0, 140.0], [814.0, 129.0], [814.0, 108.0], [813.95953, 97.31877], [811.19385, 87.010216], [803.38, 79.97997], [793.0, 78.00001], [772.715, 79.86083], [763.6174, 86.13535], [757.7451, 94.91412], [754.6303, 105.49028], [754.0, 125.5], [754.0, 136.5], [754.0, 147.5], [754.0, 158.5], [754.0, 169.5], [754.0, 180.5], [744.0, 181.0], [738.0, 176.5], [738.0, 165.5], [738.0, 154.5], [738.0, 143.5], [738.0, 132.5], [738.0, 111.5], [738.0, 100.5], [738.0, 89.5], [738.0, 78.5], [738.0, 67.5], [738.0, 67.0]], [[895.0, 67.0], [895.0, 78.0], [886.5, 80.0], [878.0, 82.0], [878.0, 93.0], [878.0, 114.0], [878.0, 125.0], [878.0, 136.0], [878.0, 147.0], [878.0, 158.0], [879.16956, 168.54498], [888.8047, 171.0], [895.0, 175.0], [893.39795, 184.21745], [882.463, 184.99852], [861.8877, 183.58984], [853.84314, 177.23979], [852.0, 167.0], [852.0, 156.0], [852.0, 145.0], [852.0, 134.0], [852.0, 123.0], [852.0, 102.0], [852.0, 91.0], [852.0, 80.0], [841.5, 80.0], [837.0, 74.0], [840.5, 67.0], [851.5, 67.0], [852.0, 57.0], [852.0, 46.0], [854.5, 38.0], [875.5, 38.0], [878.0, 46.0], [878.0, 57.0], [878.5, 67.0], [889.5, 67.0], [895.0, 67.0]], [[977.0, 67.0], [988.0, 67.0], [993.7986, 70.29102], [990.0227, 80.63424], [986.2468, 90.977455], [982.47095, 101.32067], [978.69507, 111.663925], [974.9192, 122.007225], [971.1433, 142.35052], [967.36743, 152.69382], [963.59155, 163.03712], [959.8157, 173.3804], [956.0398, 183.7237], [952.2639, 194.06697], [948.5501, 204.02423], [932.8766, 213.60083], [924.8176, 220.72247], [914.18787, 223.92001], [904.03125, 223.21875], [900.0, 215.5], [901.9167, 207.30556], [912.7785, 207.57613], [920.78955, 201.34488], [925.16693, 191.86111], [928.83405, 181.47221], [925.8042, 171.50229], [922.2888, 161.0548], [918.9332, 151.08218], [915.41785, 140.63474], [911.90247, 120.18729], [908.3871, 109.73984], [904.8717, 99.29238], [901.3563, 88.84493], [897.84094, 78.397484], [894.32556, 67.950035], [903.5, 67.0], [911.9529, 69.858826], [915.4468, 80.34119], [918.9407, 90.82355], [922.4346, 101.30591], [925.92847, 111.78827], [929.42236, 122.27063], [932.91626, 142.75299], [946.25134, 152.75888], [949.6858, 153.2907], [953.39453, 142.9302], [957.1033, 122.56971], [960.812, 112.209206], [964.52075, 101.8487], [968.2295, 91.4882], [971.93823, 81.12769], [975.647, 70.76719], [977.0, 67.0]]];

var du5, dn5, dc5, de5, dei5, dr5, dt5, da5, dai5, di5, did5, dnn5, dtt5, dy5;
var du3, dn3, dc3, de3, dei3, dr3, dt3, da3, dai3, di3, did3, dnn3, dtt3, dy3;
var du, dn, dc, de, dei, dr, dt, da, dai, di, did, dnn, dtt, dy; 
var selections5 = [du5, dn5, dc5, de5, dei5, dr5, dt5, da5, dai5, di5, did5, dnn5, dtt5, dy5];
var selections3 = [du3, dn3, dc3, de3, dei3, dr3, dt3, da3, dai3, di3, did3, dnn3, dtt3, dy3];
var selections1 = [du, dn, dc, de, dei, dr, dt, da, dai, di, did, dnn, dtt, dy];

var movementFactor = 1;
var decreasing = true; 

var width = 1024;
var height = 256;
var radius = 3.5; 
var opac = 0.2;

// http://bl.ocks.org/d3noob/raw/11313583/
// var colors = ["deepskyblue", "orangered", "mediumseagreen", "deeppink"]
var colors = ["deepskyblue"]
var getColor = colors[getRandomIntInclusive(0, colors.length - 1)];
var line5 = d3.line()
	// .curve(d3.curveLinear)
	.curve(d3.curveStep)
	// .curve(d3.curveStepBefore)
	// .curve(d3.curveStepAfter)
	// .curve(d3.curveBasis)
	// .curve(d3.curveCardinal)
	// .curve(d3.curveMonotoneX)
	// .curve(d3.curveCatmullRomOpen)
    // .x(function(d) { return d[0];})
    // .y(function(d) { return d[1]; });
    .x(function(d) { return d[0] + randn_bm() * 5; })
    .y(function(d) { return d[1] + randn_bm() * 5; });

var line3 = d3.line()
  .curve(d3.curveStep)
  // .curve(d3.curveBasis)
    .x(function(d) { return d[0] + randn_bm() * 3; })
    .y(function(d) { return d[1] + randn_bm() * 3; });

var line = d3.line()
  .curve(d3.curveStep)
  // .curve(d3.curveBasis)
    .x(function(d) { return d[0] + randn_bm() * movementFactor; })
    .y(function(d) { return d[1] + randn_bm() * movementFactor; });

var svg = d3.select("#d3Here")
    .append("svg")
        .attr("width", width)
        .attr("height", height);

// for (var i=0; i < testdatae.length; i++) {

for (var i = 0; i < letters.length; i++) {
  var attributee; 
  if (i == 4) {attributee = "white"; filll = 0.8}
  else if (i == 8) {attributee = "white"; filll = 0.8}
  else {attributee = getColor; filll = opac}
  selections5[i] = svg.append("path")
      .data([letters[i]])
      .attr("fill", attributee)
      .attr("fill-opacity", filll)
      .attr("d", line5);
  // selections3[i] = svg.append("path")
  //     .data([letters[i]])
  //     .attr("fill", attributee)
  //     .attr("fill-opacity", filll - 0.1)
  //     .attr("d", line3);
  selections1[i] = svg.append("path")
      .data([lil_letters[i]])
      .attr("fill", attributee)
      .attr("fill-opacity", filll - 0.05)
      .attr("d", line);
  }

function anim(){
  for (var i = 0; i < letters.length; i++) {
    selections5[i].data([letters[i]])
    .transition()
    .duration(2200)
    .attr("d", line5)
    
    // selections3[i].data([letters[i]])
    // .transition()
    // .duration(2200)
    // .attr("d", line5)
    
    selections1[i].data([lil_letters[i]])
    .transition()
    .duration(2200)
    .attr("d", line5)
  }
}

setInterval(anim, 2000)

// Standard Normal variate using Box-Muller transform.
function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


